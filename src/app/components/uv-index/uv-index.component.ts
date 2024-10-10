import { Component, computed, effect, inject } from '@angular/core';
import { WeatherProgressComponent } from '../weather-progress/weather-progress.component';
import { WeatherService } from '../../services/weather.service';
import { uvIndexScales } from '../../data/uv-index-scales';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { WeatherDetailTitleComponent } from '../weather-detail-title/weather-detail-title.component';

@Component({
  selector: 'app-uv-index',
  standalone: true,
  imports: [
    WeatherProgressComponent,
    LucideAngularModule,
    CommonModule,
    WeatherDetailTitleComponent,
  ],
  templateUrl: './uv-index.component.html',
})
export class UvIndexComponent {
  private weatherService = inject(WeatherService);
  public daily = this.weatherService.weatherDaily;
  public uvi = computed(() =>
    this.daily() ? Math.round(this.daily()!.uv_index_max[0]) : null
  );
  public uviPercent = computed(() =>
    this.uvi() ? (this.uvi()! / 11) * 100 : 0
  );
  public uviScale = computed(() => {
    const uvi = this.uvi();
    if (!uvi) return null;
    return uvIndexScales.find((scale) =>
      scale.range.length === 2
        ? uvi >= scale.range[0] && uvi <= scale.range[1]!
        : uvi >= scale.range[0]
    );
  });
  constructor() {
  }
}
