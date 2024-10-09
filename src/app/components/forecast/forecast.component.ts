import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { WeatherConditionPipe } from '../../pipes/weather-condition.pipe';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule,WeatherConditionPipe],
  templateUrl: './forecast.component.html',
})
export class ForecastComponent {
  private weatherService = inject(WeatherService);
  public daily = computed(() => this.weatherService.weatherDaily());
}
