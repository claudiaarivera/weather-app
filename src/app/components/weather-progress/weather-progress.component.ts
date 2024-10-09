import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-progress.component.html',
})
export class WeatherProgressComponent implements OnInit{
  @Input() cssClass: string = '';
  @Input() value: number = 0;
  public percent: number = 0;
  ngOnInit(): void {
    setTimeout(() => {
      this.percent = this.value;
    }, 500);
  }
}
