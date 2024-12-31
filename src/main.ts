import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { provideRouter, withDebugTracing } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withDebugTracing())],
}).catch((err) => console.error(err));
