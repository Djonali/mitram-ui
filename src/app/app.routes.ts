import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommunityComponent } from './pages/community/community.component';
import { CommunityListComponent } from './pages/community/community-list/community-list.component';
import { CommunityDetailComponent } from './pages/community/community-detail/community-detail.component';
import { TherapistComponent } from './pages/therapist/therapist.component';
import { TherapistListComponent } from './pages/therapist/therapist-list/therapist-list.component';
import { TherapyTrackingComponent } from './pages/therapy-tracking/therapy-tracking.component';
import { MakeFriendsComponent } from './pages/make-friends/make-friends.component';
import { HomeComponent } from './pages/home/home.component';
import { EntityComponent } from './pages/entity/entity.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entity', component: EntityComponent },
  {
    path: 'community',
    component: CommunityComponent,
    children: [
      { path: '', component: CommunityListComponent },
      { path: 'list', component: CommunityListComponent },
      { path: 'detail/:id', component: CommunityDetailComponent }
    ]
  },
  { path: 'therapist/list', component: TherapistListComponent }
  // { path: 'therapist', component: TherapistComponent },
  // { path: 'therapy', component: TherapyTrackingComponent },
  // { path: 'friends', component: MakeFriendsComponent },
];
