import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TherapistDashboardComponent } from './therapist/therapist-dashboard.component';
import { BuddyDashboardComponent } from './buddy/buddy-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TherapistDashboardComponent, BuddyDashboardComponent, UserDashboardComponent],
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent {
  activeTab: 'user' | 'buddy' | 'therapist' = 'user';

  constructor(private http: HttpClient) { }

  setActiveTab(tab: 'user' | 'buddy' | 'therapist'): void {
    this.activeTab = tab;
  }

  isActiveTab(tab: 'user' | 'buddy' | 'therapist'): boolean {
    return this.activeTab === tab;
  }
}
