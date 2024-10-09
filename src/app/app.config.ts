import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  Cloud,
  CloudRainWind,
  CloudSun,
  Droplet,
  Eye,
  Frown,
  Gauge,
  Lightbulb,
  LucideAngularModule,
  MapPin,
  Meh,
  Search,
  Skull,
  Smile,
  Sunrise,
  Sunset,
  Thermometer,
  ThermometerSun,
  UsersRound,
  Wind,
} from 'lucide-angular';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
   provideHttpClient(
     withInterceptors([loadingInterceptor]),
   ),
   importProvidersFrom(
      LucideAngularModule.pick({
        Thermometer,
        Search,
        CloudSun,
        Sunrise,
        Sunset,
        Wind,
        Lightbulb,
        ThermometerSun,
        Droplet,
        Eye,
        Gauge,
        Cloud,
        CloudRainWind,
        Smile,
        Meh,
        Frown,
        Skull,
        UsersRound,
        MapPin
      })
    ),
  ],
};
