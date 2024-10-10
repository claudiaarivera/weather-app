import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-progress.component.html',
})
export class WeatherProgressComponent {
  @Input() cssClass: string = '';
  @Input() value: number = 0;

}
