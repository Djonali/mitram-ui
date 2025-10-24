import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommunityComponent } from './pages/community/community.component';
import { TherapistComponent } from './pages/therapist/therapist.component';
import { TherapyTrackingComponent } from './pages/therapy-tracking/therapy-tracking.component';
import { MakeFriendsComponent } from './pages/make-friends/make-friends.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'therapist', component: TherapistComponent },
  { path: 'therapy', component: TherapyTrackingComponent },
  { path: 'friends', component: MakeFriendsComponent },
];
