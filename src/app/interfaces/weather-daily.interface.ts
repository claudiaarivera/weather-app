export interface WeatherDaily {
  time: string[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  uv_index_clear_sky_max: number[];
  apparent_temperature_min: string[];
  apparent_temperature_max: string[];
  precipitation_probability_max: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}
