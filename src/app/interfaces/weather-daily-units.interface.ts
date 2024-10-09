import { Unit } from './unit.type';

export interface WeatherDailyUnits {
  time: string;
  sunrise: string;
  sunset: string;
  uv_index_max: string;
  uv_index_clear_sky_max: string;
  apparent_temperature_min: Unit;
  apparent_temperature_max: Unit;
  temperature_2m_max: Unit;
  temperature_2m_min: Unit;
  precipitation_probability_max: string;
  weather_code: string;
}
