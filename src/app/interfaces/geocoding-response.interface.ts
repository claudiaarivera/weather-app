import { Geocoding } from './geocoding.interface';

export interface GeocodingResponse {
  results?: Geocoding[];
  generationtime_ms: number;
}
