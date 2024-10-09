import {
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Map, map, tileLayer } from 'leaflet';
import { WeatherService } from '../../services/weather.service';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit{
  private weatherService = inject(WeatherService);
  public currentLocation = computed(() => this.weatherService.currentLocation());
  public map: Map | null = null;
  constructor() {
    effect(() => {
      if (this.currentLocation() && this.map) {
        const { latitude, longitude } = this.currentLocation();
        this.updateCoords(latitude, longitude);
      }
    });
  }
  ngOnInit(): void {
    setTimeout(() => this.setViewMap(), 1000);
  }
  updateCoords(latitude: number, longitude: number) {
    this.map?.flyTo([latitude, longitude], this.map.getZoom(), {
      duration: 1.5,
    });
  }
  setViewMap() {
    this.map = map('map', {
      maxZoom: 15,
      zoom: 10,
      minZoom: 10,
      center: [-12.0702, -77.0251],
    }); //.setView([-12.0702, -77.0251], 12);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 15,
    }).addTo(this.map);
  }
}
