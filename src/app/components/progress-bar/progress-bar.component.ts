import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
  @Input({required: true}) value: number = 0;

}
