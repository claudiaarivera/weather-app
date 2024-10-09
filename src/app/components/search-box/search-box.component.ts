import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { WeatherService } from '../../services/weather.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GeocodingLocationFormatedPipe } from '../../pipes/geocoding-location-formated.pipe';
import { Geocoding, Location } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    LucideAngularModule,
    ReactiveFormsModule,
    GeocodingLocationFormatedPipe,
    CommonModule
  ],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private fb = inject(FormBuilder);
  public cityInput = this.fb.nonNullable.control('');
  public searchDropdownisOpen: boolean = false;
  public rawSearchResults = toSignal(
    this.cityInput.valueChanges.pipe(
      debounceTime(1000),
      //map((value) => [...new Set(value)].join('')),
      filter((value) => value.length > 3),
      distinctUntilChanged(),
      switchMap((value) => this.weatherService.getGeocoding(value)),
    ),
    { initialValue: [] }
  );
  public searchResults = computed(() => signal(this.rawSearchResults()));
  public searchResultsToDisplay = computed(() => this.searchResults()());
  public recentLocations = computed(() => this.weatherService.recentCities());
  private elementRef = inject(ElementRef);
  constructor() {}
  @HostListener('document:click', ['$event']) onDocumentClick(
    event: MouseEvent
  ) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.setsearchDropdown(false);
    }
  }
  setsearchDropdown(isOpen: boolean) {
    this.searchDropdownisOpen = isOpen;
  }
  setCurrentLocation(location: Location, e: Event) {
    e.stopPropagation();
    this.weatherService.setCurrentLocation(location);
    this.setsearchDropdown(false);
    this.cityInput.reset('');
    this.clearSearchResults();
  }
  clearSearchResults(){
    this.searchResults().set([]);
  }
  ngOnInit(): void {
  }
}
