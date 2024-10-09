import { Component, computed, effect, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { WeatherConditionPipe } from '../../pipes/weather-condition.pipe';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [CommonModule, TemperaturePipe, WeatherConditionPipe],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent {
  private weatherService = inject(WeatherService);
  public current = this.weatherService.weatherCurrent;
  public daily = this.weatherService.weatherDaily;
  public day = computed(() => this.current()?.time);
}
