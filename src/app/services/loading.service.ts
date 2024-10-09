import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading = signal(false);
  public isLoading = computed(() => this._isLoading());
  constructor() {
  }
  show() {
    this._isLoading.set(true);
  }
  hide() {
    this._isLoading.set(false);
  }
}
