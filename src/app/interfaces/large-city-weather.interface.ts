import { LargeCityWeatherResponse } from './large-city-weather-response.interface';
import { Location } from './location.interface';

export type LargeCityWeather = LargeCityWeatherResponse & {
  city: Pick<Location, 'name' | 'country' | 'id'>;
};
