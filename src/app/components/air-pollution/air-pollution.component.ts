import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { WeatherDetailTitleComponent } from '../weather-detail-title/weather-detail-title.component';
import { WeatherProgressComponent } from '../weather-progress/weather-progress.component';
import { LucideAngularModule } from 'lucide-angular';
import { AqiScalePipe } from '../../pipes/aqi-scale.pipe';

@Component({
  selector: 'app-air-pollution',
  standalone: true,
  imports: [
    CommonModule,
    WeatherDetailTitleComponent,
    WeatherProgressComponent,
    LucideAngularModule,
    AqiScalePipe
  ],
  templateUrl: './air-pollution.component.html',
})
export class AirPollutionComponent {
  private weatherService = inject(WeatherService);
  public airQualityIndex = toSignal(
    this.weatherService.getAirQualityIdx(this.weatherService.currentLocation()),
    { initialValue: 0}
  );
  public airQualityPercent = computed(() => 100 * this.airQualityIndex()/ 500);
  constructor() {}
}
