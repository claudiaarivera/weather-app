import { Pipe, PipeTransform } from '@angular/core';
import { weatherConditions } from '../data';

@Pipe({
  name: 'weatherCondition',
  standalone: true
})
export class WeatherConditionPipe implements PipeTransform {

  transform(code: number, isDay = 1) {
    const condition = weatherConditions.find(
      (condition) => condition.code === code
    );
    if (!condition) return undefined;
    const { description, iconId } = condition;
  
    return {
      description,
      img: `weather-icons/${iconId}${isDay === 0 ? 'n' : 'd'}.png`,
    };
  }

}
