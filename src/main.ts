import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { appRoutes  } from './app/app.routes';
import { AppComponent } from './app/core/layout/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
  ],
});