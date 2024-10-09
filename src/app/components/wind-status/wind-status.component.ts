import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MetricComponent } from '../metric/metric.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wind-status',
  standalone: true,
  imports: [MetricComponent, CommonModule],
  templateUrl: './wind-status.component.html',
})
export class WindStatusComponent {
  private weatherService = inject(WeatherService);
  public current = computed(() => this.weatherService.weatherCurrent());
  public windStatus = computed(() => this.current()?.wind_speed_10m);
  public weatherTime = computed(() => this.current()?.time);

}
