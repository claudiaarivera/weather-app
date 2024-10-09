import { Component, computed, inject } from '@angular/core';
import { WeatherDetailTitleComponent } from '../weather-detail-title/weather-detail-title.component';
import { LucideAngularModule } from 'lucide-angular';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { MetricComponent } from '../metric/metric.component';

@Component({
  selector: 'app-pressure',
  standalone: true,
  imports: [WeatherDetailTitleComponent, LucideAngularModule, CommonModule, MetricComponent],
  templateUrl: './pressure.component.html',
})
export class PressureComponent {
  private weatherService = inject(WeatherService);
  public current = computed(() => this.weatherService.weatherCurrent());
  public pressure = computed(() => this.current()?.pressure_msl);
}
