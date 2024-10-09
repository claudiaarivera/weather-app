import { Pipe, PipeTransform } from '@angular/core';
import { AqiScale } from '../interfaces';
import { aqiScales } from '../data';

@Pipe({
  name: 'aqiScale',
  standalone: true,
})
export class AqiScalePipe implements PipeTransform {
  transform(value: number): AqiScale | undefined {
    const scale = aqiScales.find(
      ({ range: [start, end] }) => value >= start && value <= end
    );
    return scale;
  }
}
