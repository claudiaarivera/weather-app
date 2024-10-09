import { Pipe, PipeTransform } from '@angular/core';
import { Unit } from '../interfaces/unit.type';
@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: Unit): number {
    if (!value) 0;
    switch (unit) {
      case '°C':
        return  value - 273.15;
      case '°F':
        return value * (9 / 5) - 459.67;
      default:
        return value;
    }
  }
}
