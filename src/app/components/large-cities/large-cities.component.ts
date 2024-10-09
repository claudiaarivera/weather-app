import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { WeatherConditionPipe } from '../../pipes/weather-condition.pipe';

@Component({
  selector: 'app-large-cities',
  standalone: true,
  imports: [CommonModule,WeatherConditionPipe],
  templateUrl: './large-cities.component.html',
})
export class LargeCitiesComponent {
  private weatherService = inject(WeatherService);
  public largeCitiesWeather = toSignal(
    this.weatherService.getLargeCitiesWeather(),
    { initialValue: [] }
  );
}
