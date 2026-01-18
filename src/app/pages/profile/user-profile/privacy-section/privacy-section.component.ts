
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../types';

@Component({
  selector: 'app-privacy-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './privacy-section.component.html',
  styleUrls: ['./privacy-section.component.scss']
})
export class PrivacySectionComponent {
  @Input({ required: true }) profile!: UserProfile;
  @Output() profileChange = new EventEmitter<Partial<UserProfile>>();

  onUpdate(updates: Partial<UserProfile>) {
    this.profileChange.emit(updates);
  }
}
