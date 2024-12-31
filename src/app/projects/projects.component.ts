import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor() {
    // console.log('xxx initialized');
    }
  projects = [
    { name: 'Voice of Our Clients', description: 'It is the application where clients of our organization can provide their insights.' },
    { name: 'Project 2', description: 'Description of Project 2' },
  ];
}

