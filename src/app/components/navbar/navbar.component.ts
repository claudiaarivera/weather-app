import { Component, inject } from '@angular/core';
import { LucideAngularModule, LucideIconConfig, MapPin, Github } from 'lucide-angular';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CityDisplayComponent } from '../city-display/city-display.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, SearchBoxComponent, CityDisplayComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private lucideIconConfig = inject(LucideIconConfig);
  readonly mapIcon = MapPin;
  readonly gitHubIcon = Github;
  constructor() {
    this.lucideIconConfig.strokeWidth = 1.5
  }
}
