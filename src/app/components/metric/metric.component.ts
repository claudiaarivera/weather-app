import { Component, Input } from '@angular/core';
import { WeatherDetailTitleComponent } from '../weather-detail-title/weather-detail-title.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [WeatherDetailTitleComponent, LucideAngularModule],
  templateUrl: './metric.component.html',
})
export class MetricComponent {
  @Input({ required: true}) title!: string;
  @Input({ required: true}) value!: string | number;
  @Input() unit?: string;
  @Input({ required: true}) icon!: string;
  @Input() bottomText?: string;
}
