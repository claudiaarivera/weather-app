import { Component, computed, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  //private loadingService = inject(LoadingService);
  //public isLoading = computed(() => this.loadingService.isLoading());
}
