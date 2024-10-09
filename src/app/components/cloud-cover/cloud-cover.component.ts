import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { MetricComponent } from '../metric/metric.component';

@Component({
  selector: 'app-cloud-cover',
  standalone: true,
  imports: [MetricComponent],
  templateUrl: './cloud-cover.component.html',
})
export class CloudCoverComponent {
  private weatherService = inject(WeatherService);
  public current = computed(() => this.weatherService.weatherCurrent());
  public cloudCover = computed(() => this.current()?.cloud_cover);
  
}
