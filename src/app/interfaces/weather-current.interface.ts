export interface WeatherCurrent {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  precipitation: number;
  cloud_cover: number;
  pressure_msl: number;
  weather_code: number;
  is_day: 1 | 0;
  wind_speed_10m: number;
}
