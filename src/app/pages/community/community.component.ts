import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkInProgressOverlayComponent} from '../../shared/components/work-overlay/work-in-progress-overlay.component'

@Component({
  selector: 'app-community',
  standalone: true, 
  imports: [CommonModule, WorkInProgressOverlayComponent],
  templateUrl: './community.component.html',
  styles: []
})
export class CommunityComponent {
  showNewPost = false;
  activeView: 'groups' | 'posts' = 'groups';
}
