import { Component } from '@angular/core';
import {WorkInProgressOverlayComponent} from '../../shared/components/work-overlay/work-in-progress-overlay.component';


@Component({
  selector: 'app-therapist',
  standalone: true,
  imports: [WorkInProgressOverlayComponent],
  templateUrl: './therapist.component.html',
  styles: ``
})
export class TherapistComponent {
  showWaitlistModal = false;

  constructor() {}

  openWaitlistModal(): void {
    this.showWaitlistModal = true;
  }

  closeWaitlistModal(): void {
    this.showWaitlistModal = false;
  }

 
}
