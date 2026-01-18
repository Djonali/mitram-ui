import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../../../environment';

@Component({
    selector: 'app-therapist-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './therapist-dashboard.component.html',
    styleUrls: ['./therapist-dashboard.scss']
})
export class TherapistDashboardComponent {
    constructor(private http: HttpClient) { }

    // Add your therapist dashboard methods here
}
