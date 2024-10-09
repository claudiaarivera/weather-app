import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { WeatherService } from '../../services/weather.service';
import { FormatLocationPipe } from '../../pipes/format-location.pipe';

@Component({
  selector: 'app-city-display',
  standalone: true,
  imports: [LucideAngularModule, FormatLocationPipe],
  templateUrl: './city-display.component.html',
})
export class CityDisplayComponent {
  private weatherService = inject(WeatherService);
  public currentLocation = this.weatherService.currentLocation;
}
