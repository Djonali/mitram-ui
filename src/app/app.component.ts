import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { RecentActivityComponent } from "./shared/components/recent-activity/recent-activity.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, RecentActivityComponent],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {}
