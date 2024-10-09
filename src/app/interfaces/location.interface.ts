import { Geocoding } from "./geocoding.interface";

export interface Location extends Pick<Geocoding, 'latitude' | 'longitude' | 'name' | 'country' | 'timezone' | 'admin1'>, Partial<Pick<Geocoding, 'id'>>{
}