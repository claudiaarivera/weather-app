import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MetricComponent } from '../metric/metric.component';

@Component({
  selector: 'app-humidity',
  standalone: true,
  imports: [MetricComponent],
  templateUrl: './humidity.component.html',
})
export class HumidityComponent {
  private weatherService = inject(WeatherService);
  public current = computed(() => this.weatherService.weatherCurrent());
  public humidity = computed(() => this.current()?.relative_humidity_2m);
  public humidityScale = computed(() => {
    const humidity = this.humidity();
    if (!humidity) return '';
    if (humidity >= 0 && humidity <= 30) {
      return 'Dry';
    }
    if (humidity > 30 && humidity <= 60) {
      return 'Optimal';
    }
    if (humidity > 60 && humidity <= 100) {
      return 'Humid';
    }
    return 'Not match';
  });
}
