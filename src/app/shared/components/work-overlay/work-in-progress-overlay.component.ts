import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WaitlistFormData, WaitlistService } from '../../../services/waitlist.service';

@Component({
  selector: 'app-work-in-progress-overlay',
  standalone: true,
  imports:[CommonModule, RouterLink, FormsModule],
  templateUrl: './work-in-progress-overlay.component.html',
  styleUrls: ['./work-in-progress-overlay.component.scss']
})
export class WorkInProgressOverlayComponent {
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  errors = {
    name: '',
    email: ''
  };

  constructor(private router: Router, private waitlistService: WaitlistService) {}

  onSubmit() {
    // Reset errors
    this.errors = { name: '', email: '' };
    
    // Validate form
    let isValid = true;

    if (!this.formData.name.trim()) {
      this.errors.name = 'Name is required';
      isValid = false;
    }

    if (!this.formData.email.trim()) {
      this.errors.email = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.formData.email)) {
      this.errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (isValid) {
      const waitlistData: WaitlistFormData = {
        name: this.formData.name.trim(),
        email: this.formData.email.trim(),
        phone: this.formData.phone.trim() || undefined
      };

      this.waitlistService.addToWaitlist(waitlistData).subscribe({
        next: (response) => {
          if (response.success) {
            alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
            // Reset form
            this.formData = { name: '', email: '', phone: '' };
          } else {
            alert('Error: ' + response.message);
          }
        },
        error: (error) => {
          console.error('Error submitting waitlist form:', error);
          alert('Sorry, there was an error submitting your information. Please try again.');
        }
      });
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
