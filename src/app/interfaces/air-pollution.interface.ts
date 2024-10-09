export interface AirPollution {
  current: AirPollutionCurrent;
}
interface AirPollutionCurrent {
  time: string;
  interval: number;
  us_aqi: number;
}
