import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherDetailTitleComponent } from './components/weather-detail-title/weather-detail-title.component';
import { LucideAngularModule } from 'lucide-angular';
import { ForecastComponent } from './components/forecast/forecast.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { AirPollutionComponent } from './components/air-pollution/air-pollution.component';
import { SunriseAndSunsetComponent } from './components/sunrise-and-sunset/sunrise-and-sunset.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { UvIndexComponent } from './components/uv-index/uv-index.component';
import { FeelsLikeComponent } from './components/feels-like/feels-like.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { VisibilityComponent } from './components/visibility/visibility.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { CloudCoverComponent } from './components/cloud-cover/cloud-cover.component';
import { MapComponent } from './components/map/map.component';
import { LargeCitiesComponent } from './components/large-cities/large-cities.component';
import { CommonModule } from '@angular/common';
import { ChanceOfRainComponent } from './components/chance-of-rain/chance-of-rain.component';
import { WindStatusComponent } from './components/wind-status/wind-status.component';
import { DewPointComponent } from './components/dew-point/dew-point.component';
import { LoadingService } from './services/loading.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    WeatherDetailTitleComponent,
    LucideAngularModule,
    ForecastComponent,
    TemperatureComponent,
    AirPollutionComponent,
    SunriseAndSunsetComponent,
    DailyForecastComponent,
    UvIndexComponent,
    FeelsLikeComponent,
    HumidityComponent,
    VisibilityComponent,
    PressureComponent,
    CloudCoverComponent,
    WindStatusComponent,
    DewPointComponent,
    MapComponent,
    LargeCitiesComponent,
    ChanceOfRainComponent,
    SpinnerComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private loadingService = inject(LoadingService);
  public isLoading =  this.loadingService.isLoading;
  public cargando = signal(true); 
  //public isLoading = this.loadingService.isLoading;
  constructor(){
  }
  ngOnInit(): void {}
  
}
