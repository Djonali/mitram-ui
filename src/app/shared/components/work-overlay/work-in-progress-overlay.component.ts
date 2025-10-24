import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-in-progress-overlay',
  standalone: true,
  imports:[CommonModule, RouterLink],
  templateUrl: './work-in-progress-overlay.component.html',
  styleUrls: ['./work-in-progress-overlay.component.scss']
})
export class WorkInProgressOverlayComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email.trim()) {
      alert(`Thanks for connecting! We'll reach out to ${this.email}`);
      this.email = '';
    }
  }
  goHome() {
    this.router.navigate(['/home']);
  }
}
