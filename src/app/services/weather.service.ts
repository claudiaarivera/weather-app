import {
  computed,
  effect,
  inject,
  Injectable,
  signal,
  untracked,
} from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, filter, map, Observable, of, switchMap, tap } from 'rxjs';
import {
  AirPollution,
  Geocoding,
  GeocodingResponse,
  LargeCityWeatherResponse,
  WeatherForecast,
  Location,
  LargeCityWeather,
} from '../interfaces';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filterTodayHours, getClosetIndexToNow } from '../utils/date.utils';
import { largeCities } from '../data';
import { DEFAULT_LOCATION } from '../config/default-location';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly DEFAULT_LOCATION: Location = DEFAULT_LOCATION;
  private _apiUrl = environment.apiUrl;
  private _geocodingApiUrl = environment.geocodingApiUrl;
  private _aqiApiUrl = environment.aqiApiUrl;
  private _http = inject(HttpClient);
  private _currentLocation = signal<Location>(this.DEFAULT_LOCATION);
  private _recentCities = signal<Location[]>(
    this.getRecentLocationsFromLocalStorage()
  );
  private _weather = toSignal(
    toObservable(this._currentLocation).pipe(
      switchMap((location) => {
        return this.getWeatherForecast(location);
      })
    )
  );

  public recentCities = computed(() => this._recentCities());
  public currentLocation = computed(() => this._currentLocation());
  public weather = computed(() => this._weather());
  public weatherDaily = computed(() => {
    console.log('daily of service run');

    return this.weather()?.daily;
  });
  public weatherCurrent = computed(() => {
    console.log('current of service run');
    return this.weather()?.current;
  });

  public weatherHourly = computed(() => {
    console.log('hourly 🍎');
    return this.weather()?.hourly;
  });
  public closestIndexToNow = computed(() => {
    const time = this.weatherHourly()?.time;
    return (
      time &&
      getClosetIndexToNow(time!, untracked(this._currentLocation).timezone)
    );
  });
  constructor() {
    effect(
      () => {
        if (
          this.currentLocation() &&
          this.currentLocation() !== this.DEFAULT_LOCATION
        ) {
          this.updateRecentCities(this.currentLocation());
          this.saveRecentLocationsToLocalStorage();
        }
      },
      { allowSignalWrites: true }
    );
  }
  getRecentLocationsFromLocalStorage(): Location[] {
    const cities = localStorage.getItem('recent-locations');
    if (!cities) return [];
    try {
      const cityList = JSON.parse(cities);
      if (!Array.isArray(cityList)) {
        return [];
      }
      return cityList;
    } catch (error) {
      return [];
    }
  }
  updateRecentCities(city: Location) {
    this._recentCities.update((cities) => {
      const isAlreadySave = cities.find(({ name }) => name === city.name);
      if (isAlreadySave) {
        return cities;
      }
      return [city, ...cities].slice(0, 10);
    });
  }
  saveRecentLocationsToLocalStorage() {
    localStorage.setItem(
      'recent-locations',
      JSON.stringify(this._recentCities())
    );
  }
  getWeatherForecast(
    location: Location
  ): Observable<WeatherForecast | undefined> {
    const { latitude, longitude, timezone } = location;
    let params = new HttpParams();
    params = params.set('latitude', latitude);
    params = params.set('longitude', longitude);
    params = params.set('timezone', timezone);
    params = params.set(
      'current',
      'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,cloud_cover,pressure_msl,weather_code,is_day,wind_speed_10m'
    );
    params = params.set(
      'hourly',
      'visibility,precipitation_probability,temperature_2m,weather_code,dew_point_2m'
    );
    params = params.set(
      'daily',
      'sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_probability_max,temperature_2m_max,temperature_2m_min,weather_code'
    );
    params = params.set('forecast_days', '7');
    return this._http
      .get<WeatherForecast>(`${this._apiUrl}/forecast`, {
        params,
      })
      .pipe(
        map((forecast) => {
          const { hourly } = forecast;
          return {
            ...forecast,
            hourly: {
              ...hourly,
              time: filterTodayHours(hourly.time, timezone),
            },
          };
        }),
        catchError(({ error, status }) => {
          return of(undefined);
        })
      );
  }
  getLargeCitiesWeather(): Observable<LargeCityWeather[]> {
    const params = this.getLargCitiesParams();
    return this._http
      .get<LargeCityWeatherResponse[]>(
        `${this._apiUrl}/forecast?daily=temperature_2m_max,temperature_2m_min&current=weather_code&forecast_days=1`,
        { params }
      )
      .pipe(
        map((response) =>
          response.map((weather, i) => {
            const { name, country, id } = largeCities[i];
            return { ...weather, city: { name, country, id } };
          })
        ),
        catchError(() => of([]))
      );
  }
  private getLargCitiesParams(): HttpParams {
    let params = new HttpParams();
    const { latitude, longitude, timezone } = largeCities.reduce(
      (
        acc: { latitude: number[]; timezone: string[]; longitude: number[] },
        city
      ) => {
        acc.latitude.push(city.latitude);
        acc.longitude.push(city.longitude);
        acc.timezone.push(city.timezone);
        return acc;
      },
      { latitude: [], timezone: [], longitude: [] }
    );
    params = params.set('latitude', latitude.join(','));
    params = params.set('longitude', longitude.join(','));
    params = params.set('timezone', timezone.join(','));
    return params;
  }
  getGeocoding(city: string): Observable<Location[]> {
    return this._http
      .get<GeocodingResponse>(`${this._geocodingApiUrl}/search?name=${city}`)
      .pipe(
        map((response) => response.results?.filter((geocoding) => !!geocoding.timezone && geocoding.feature_code !== 'PCLI' && geocoding.feature_code !== 'PCLD')),
        map(
          (geocoding) =>
            geocoding?.map(
              ({
                admin1,
                country,
                latitude,
                longitude,
                name,
                timezone,
                id,
              }) => ({
                admin1,
                country,
                latitude,
                longitude,
                name,
                timezone,
                id,
              })
            ) || []
        ),
        catchError(() => of([]))
      );
  }
  getAirQualityIdx(location: Location): Observable<number> {
    const { latitude, longitude } = location;
    return this._http
      .get<AirPollution>(
        `${this._aqiApiUrl}/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,uv_index`
      )
      .pipe(
        map((pollution) => pollution.current.us_aqi),
        catchError(() => {
          return of(0);
        })
      );
  }
  setCurrentLocation(location: Location) {
    this._currentLocation.set(location);
  }
}
