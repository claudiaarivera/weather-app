import { WeatherContext } from "./weather-context.interface";
import { WeatherCurrentUnits } from "./weather-current-units.interface";
import { WeatherCurrent } from "./weather-current.interface";
import { WeatherDailyUnits } from "./weather-daily-units.interface";
import { WeatherDaily } from "./weather-daily.interface";

export interface LargeCityWeatherResponse extends WeatherContext{
  daily_units:           DailyUnits;
  daily:                 Daily;
  location_id?:          number;
  current:               Current;
  current_units:         CurrentUnits;
}
interface Current extends Pick<WeatherCurrent, 'time' | 'interval' | 'weather_code'>{};
interface CurrentUnits extends Pick<WeatherCurrentUnits, 'time' | 'interval' | 'weather_code'>{}
interface Daily extends Pick<WeatherDaily, 'time' | 'temperature_2m_max' | 'temperature_2m_min'>{}
interface DailyUnits extends Pick<WeatherDailyUnits, 'time' | 'temperature_2m_max' | 'temperature_2m_min'>{}