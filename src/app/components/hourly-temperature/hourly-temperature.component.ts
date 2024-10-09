import { CommonModule } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
import { WeatherConditionPipe } from '../../pipes/weather-condition.pipe';

@Component({
  selector: 'app-hourly-temperature',
  standalone: true,
  imports: [CommonModule,WeatherConditionPipe],
  templateUrl: './hourly-temperature.component.html',
})
export class HourlyTemperatureComponent {
  @Input({ required: true}) temperature!: number;
  @Input({ required: true}) time!: string;
  public weatherCode = input.required<number>();
}
