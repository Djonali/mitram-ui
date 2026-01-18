import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecentActivityComponent } from '../../../shared/components/recent-activity/recent-activity.component';
import { API_URL } from '../../../../environment';
import { DashboardService, WellnessInsight } from '../dashboard.service';

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.scss']
})
export class UserDashboardComponent {
    insight = signal<WellnessInsight | null>(null);
    affirmation = signal<string | null>(null);
  
    constructor(private gemini: DashboardService) {}
  
    ngOnInit() {
      this.loadInsights();
    }
  
    async loadInsights() {
      try {
        const [insightData, affirmationData] = await Promise.all([
          this.gemini.getWellnessInsight(),
          this.gemini.getAffirmation()
        ]);
        this.insight.set(insightData);
        this.affirmation.set(affirmationData);
      } catch (err) {
        console.error("Gemini failed to load dashboard insights", err);
      }
    }

    // Add your user dashboard methods here
} // end class
