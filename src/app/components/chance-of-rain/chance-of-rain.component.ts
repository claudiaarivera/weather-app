import { Component, computed, inject } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chance-of-rain',
  standalone: true,
  imports: [ProgressBarComponent, CommonModule],
  templateUrl: './chance-of-rain.component.html',
})
export class ChanceOfRainComponent {
  private weatherService = inject(WeatherService);
  public hourly = this.weatherService.weatherHourly;
  public time = computed(() => this.hourly()?.time);
  public closestIndexToNow = this.weatherService.closestIndexToNow;
  public hoursClosetToNow = computed(
    () =>
      this.time() && [...this.time()!].splice(this.closestIndexToNow() || 0, 6)
  );
  public precProbability = computed(
    () => this.hourly()?.precipitation_probability
  );
}
