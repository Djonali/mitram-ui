import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './community.component.html',
  styles: []
})
export class CommunityComponent {
  showNewPost = false;
  activeView: 'groups' | 'posts' = 'groups';
}
