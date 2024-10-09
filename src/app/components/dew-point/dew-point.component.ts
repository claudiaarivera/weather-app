import { Component, computed, inject } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular';
import { WeatherDetailTitleComponent } from '../weather-detail-title/weather-detail-title.component';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dew-point',
  standalone: true,
  imports: [LucideAngularModule, WeatherDetailTitleComponent, CommonModule],
  templateUrl: './dew-point.component.html',
})
export class DewPointComponent {

  private weatherService = inject(WeatherService);
  public hourly = computed(() => this.weatherService.weatherHourly());
  public dewPoints = computed(() => this.hourly()?.dew_point_2m);
  public closestIndexToNow = computed(() => this.weatherService.closestIndexToNow());
  public dewPoint = computed(() => this.closestIndexToNow() && this.dewPoints()?.[this.closestIndexToNow()!]);
}
