import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

//node_modules\lucide-angular\src\icons\icons\types
@Component({
  selector: 'app-weather-detail-title',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './weather-detail-title.component.html',
  
})
export class WeatherDetailTitleComponent {
  @Input({required: true}) title!: string;
  @Input() icon: string = '';
  @Input() cssClass: string = '';
}
