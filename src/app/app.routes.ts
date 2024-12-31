import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, // Default route
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: 'about' }, // Wildcard route
  ];