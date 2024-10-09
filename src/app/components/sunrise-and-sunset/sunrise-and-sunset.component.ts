import { Component, computed, inject, OnInit } from '@angular/core';
import { WeatherDetailTitleComponent } from '../weather-detail-title/weather-detail-title.component';
import {  LucideAngularModule } from 'lucide-angular';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sunrise-and-sunset',
  standalone: true,
  imports: [WeatherDetailTitleComponent, LucideAngularModule, CommonModule],
  templateUrl: './sunrise-and-sunset.component.html',
})
export class SunriseAndSunsetComponent implements OnInit {
  private weatherService = inject(WeatherService);
  public daily = computed(() => this.weatherService.weatherDaily());
  public sunrise = computed(() => {
    const sunrise = this.daily()?.sunrise;
    return sunrise;
  });
  public sunset = computed(() => {
    const sunset = this.daily()?.sunset;
    return sunset;
  });
  ngOnInit(): void {}
}
