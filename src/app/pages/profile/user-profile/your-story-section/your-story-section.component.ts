
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../types';

@Component({
  selector: 'app-your-story-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './your-story-section.component.html',
  styleUrls: ['./your-story-section.component.scss']
})
export class YourStorySectionComponent {
  @Input({ required: true }) profile!: UserProfile;
  @Output() profileChange = new EventEmitter<Partial<UserProfile>>();

  onUpdate(updates: Partial<UserProfile>) {
    this.profileChange.emit(updates);
  }

  removeTag(tagToRemove: string) {
    this.onUpdate({ tags: this.profile.tags.filter(t => t !== tagToRemove) });
  }

  addTag() {
    const newTag = prompt("Enter a new tag:");
    if (newTag && !this.profile.tags.includes(newTag)) {
      this.onUpdate({ tags: [...this.profile.tags, newTag] });
    }
  }
}
