import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { RecentActivityComponent } from '../../shared/components/recent-activity/recent-activity.component';
import { LoginComponent } from '../../shared/components/login/login.component';
import { API_URL } from '../../../environment';
import { RegisterComponent } from '../../shared/components/register/register.component';
import {WorkInProgressOverlayComponent} from '../../shared/components/work-overlay/work-in-progress-overlay.component'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RecentActivityComponent, LoginComponent, RegisterComponent, WorkInProgressOverlayComponent],
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent {
  count = 0;
  showRegister: boolean = false;
  constructor(private http: HttpClient) { }
  showLogin = false;

  onAddCommunityClick(): void {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    // Example payload; adjust fields as needed
    const payload: any = {
      name: 'New Name' + this.count++,
      description: 'join this community'
    };

    this.http
      .post(`${API_URL}/api/community`, payload, { headers })
      .subscribe({
        next: (res) => {
          // Optionally: show a toast or update UI state
          console.log('Community created', res);
        },
        error: (err) => {
          console.error('Create community failed', err);
        }
      });
  }
  toggleLogin(): void {
    this.showLogin = !this.showLogin;
  }

  onLoginSuccess(): void {
    console.log('User registered and logged in');
  }

  toggleRegister(): void {
    this.showRegister = !this.showRegister;
  }

  onRegisterSuccess(): void {
    console.log('User registered and logged in');
  }
}
