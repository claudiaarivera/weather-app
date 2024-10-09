import {
  AfterViewInit,
  Component,
  computed,
  inject,
  ViewChild,
} from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType,
} from 'embla-carousel-angular';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { HourlyTemperatureComponent } from '../hourly-temperature/hourly-temperature.component';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  imports: [
    EmblaCarouselDirective,
    CommonModule,
    TemperaturePipe,
    HourlyTemperatureComponent,
  ],
  templateUrl: './daily-forecast.component.html',
})
export class DailyForecastComponent implements AfterViewInit {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;
  private weatherService = inject(WeatherService);
  private emblaApi?: EmblaCarouselType;
  public options = { loop: false };
  public hourly = this.weatherService.weatherHourly;
  public weatherCodes = computed(() => this.hourly()?.weather_code);
  constructor() {
  }
  ngAfterViewInit() {
    //this.emblaApi = this.emblaRef.emblaApi;
  }
} //*
