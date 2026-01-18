import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../../../environment';

@Component({
  selector: 'app-buddy-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './buddy-dashboard.component.html',
  styleUrls: ['./buddy-dashboard.scss']
})
export class BuddyDashboardComponent {
  constructor(private http: HttpClient) {}

  // Add your buddy dashboard methods here
}
