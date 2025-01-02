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
    { name: 'Voice of Our Clients', description: 'It is the application where clients of our organization can provide their insights.Worked on 15+ improvements and 50+ bugfixes. Been a part of migrating this application from durandal , knockoutjs into Angular application and involoved in developing 10 screens including 2 major screens.Designed and implemented responsive user interfaces for web applications, ensuring seamless functionality and appearance on both mobile and desktop devices.Had hands on experience in api integration.' },
    { name: 'Leadership Conference workshop tool', description: 'IT is the application where leaders of the organizations will participate and provide their insights and share their ideas which will be a part of next financial year.Developed 5+ new functionalities and worked on 20+ defect fixes. Been a part of Production support when it was live and provided immediate solutions for the defect they came up with. ' },
 
  ];
}

