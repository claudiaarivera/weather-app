import { Unit } from './unit.type';
import { WeatherContext } from './weather-context.interface';
import { WeatherCurrentUnits } from './weather-current-units.interface';
import { WeatherCurrent } from './weather-current.interface';
import { WeatherDailyUnits } from './weather-daily-units.interface';
import { WeatherDaily } from './weather-daily.interface';

export interface WeatherForecast extends WeatherContext{
  current_units: WeatherCurrentUnits;
  current: WeatherCurrent;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily_units: WeatherDailyUnits;
  daily: WeatherDaily;
}

export interface Hourly {
  time: string[];
  visibility: number[];
  precipitation_probability: number[];
  temperature_2m: number[];
  weather_code: number[];
  dew_point_2m: number[];
}

export interface HourlyUnits {
  time: string;
  visibility: string;
  precipitation_probability: string;
  temperature_2m: Unit;
  weather_code: string;
  dew_point_2m: Unit;
}
