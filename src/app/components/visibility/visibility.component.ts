import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { MetricComponent } from '../metric/metric.component';

@Component({
  selector: 'app-visibility',
  standalone: true,
  imports: [MetricComponent, CommonModule],
  templateUrl: './visibility.component.html',
})
export class VisibilityComponent {
  private weatherService = inject(WeatherService);
  public hourly = computed(() => this.weatherService.weatherHourly());
  public closestIndexToNow = computed(() =>
    this.weatherService.closestIndexToNow()
  );
  public visibility = computed(() =>
    this.hourly()
      ? this.hourly()!.visibility[this.closestIndexToNow() ?? 0] / 1000
      : null
  );
  constructor() {}
}
