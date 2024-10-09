import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../interfaces';

@Pipe({
  name: 'locationFormated',
  standalone: true,
})

export class LocationFormatedPipe implements PipeTransform {
  transform({ name, admin1, country}: Location): string | null{
    if (!name) return null;
    const stringsOnly = [name, admin1, country].filter((value): value is string  => !!value);
    return `${stringsOnly.join(',')}`
  }
}