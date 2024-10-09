import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { MetricComponent } from '../metric/metric.component';

@Component({
  selector: 'app-feels-like',
  standalone: true,
  imports: [CommonModule, MetricComponent],
  templateUrl: './feels-like.component.html',
})
export class FeelsLikeComponent {
  private weatherService = inject(WeatherService);
  public current = computed(() => this.weatherService.weatherCurrent());
  public feelsLike = computed(() => this.current()?.apparent_temperature);
}
