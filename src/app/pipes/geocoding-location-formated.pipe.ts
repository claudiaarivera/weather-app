import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces';

@Pipe({
  name: 'geocodingLocationFormated',
  standalone: true,
})

export class GeocodingLocationFormatedPipe implements PipeTransform {
  transform({ name, admin1, country}: Location): string | null{
    if (!name) return null;
    return `${name}, ${admin1}, ${country}`
  }
}