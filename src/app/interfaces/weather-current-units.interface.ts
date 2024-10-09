import { Unit } from './unit.type';

export interface WeatherCurrentUnits {
  time: string;
  interval: string;
  temperature_2m: Unit;
  relative_humidity_2m: string;
  apparent_temperature: Unit;
  cloud_cover: string;
  precipitation: string;
  pressure_msl: string;
  weather_code: string;
  is_day: '';
  wind_speed_10m: string;
}
