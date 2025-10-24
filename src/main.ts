import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Set default theme on first load unless user saved a preference
document.documentElement.setAttribute('data-theme', 'darkgreen');
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
