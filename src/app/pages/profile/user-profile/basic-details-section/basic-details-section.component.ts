
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../types';

@Component({
  selector: 'app-basic-details-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-details-section.component.html',
  styleUrls: ['./basic-details-section.component.scss']
})
export class BasicDetailsSectionComponent {
  @Input({ required: true }) profile!: UserProfile;
  @Output() profileChange = new EventEmitter<Partial<UserProfile>>();

  onUpdate(updates: Partial<UserProfile>) {
    this.profileChange.emit(updates);
  }
}
