import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-waitlist-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './waitlist-modal.component.html',
  styleUrls: ['./waitlist-modal.component.scss']
})
export class WaitlistModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<{name: string, email: string, number?: string}>();

  formData = {
    name: '',
    email: '',
    number: ''
  };

  errors = {
    name: '',
    email: ''
  };

  close(): void {
    this.closeModal.emit();
  }

  onSubmit(): void {
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
      this.submitForm.emit({
        name: this.formData.name.trim(),
        email: this.formData.email.trim(),
        number: this.formData.number.trim() || undefined
      });
      
      // Reset form
      this.formData = { name: '', email: '', number: '' };
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
