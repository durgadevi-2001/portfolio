// import { Component, OnInit, HostListener } from '@angular/core';
// import { trigger, transition, style, animate, keyframes } from '@angular/animations';
// import { CommonModule } from '@angular/common'; // <-- Use CommonModule
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- Import if globally in app module

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [CommonModule], // <-- Use CommonModule here
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss'],
//   animations: [
//     trigger('highlight', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateX(-100%)' }),  // Initial state (before the element enters)
//         animate('500ms',  // 500ms for animation
//           keyframes([
//             style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
//           ])
//         )
//       ])
//     ])
//   ]
// })
// export class ProjectsComponent implements OnInit {
//   projects = [
//     {
//       name: 'Voice of Our Clients',
//       description:
//         'It is the application where clients of our organization can provide their insights. Worked on 15+ improvements and 50+ bugfixes. Migrated the application from Durandal and KnockoutJS to Angular. Involved in developing 10 screens, including 2 major ones. Designed and implemented responsive user interfaces for both web and mobile devices.',
//     },
//     {
//       name: 'Leadership Conference Workshop Tool',
//       description:
//         'This tool is used by leaders of the organization to share insights and ideas for the next financial year. Developed 5+ new functionalities and worked on 20+ defect fixes. Supported production during live issues and provided immediate solutions.',
//     },
//   ];

//   // Flag to control visibility of second project and awards section
//   showSecondProject: boolean = false;
//   showAwardsSection: boolean = false;

//   constructor() {}

//   ngOnInit(): void {
//     // Initially, show only the first project
//     this.showSecondProject = false;

//     // Simulate loading of second project after a delay (e.g., 2 seconds)
//     setTimeout(() => {
//       this.showSecondProject = true;
//     }, 2000); // Delay of 2 seconds for the second project
//   }

//   // Detect scroll or touch event to show awards section
//   @HostListener('window:scroll', ['$event'])
//   onScroll(event: any): void {
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const project2Element = document.getElementById('second-project');

//     if (project2Element && scrollPosition >= project2Element.offsetTop + project2Element.offsetHeight) {
//       this.showAwardsSection = true; // Show awards section when user reaches the end of second project
//     }
//   }

//   @HostListener('touchstart', ['$event'])
//   onTouchStart(event: any): void {
//     const project2Element = document.getElementById('second-project');
//     if (project2Element) {
//       this.showAwardsSection = true; // Show awards section when user touches after the second project
//     }
//   }
// }
// import { Component, OnInit, HostListener } from '@angular/core';
// import { trigger, transition, style, animate, keyframes } from '@angular/animations';
// import { CommonModule } from '@angular/common'; // <-- Use CommonModule

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [CommonModule], // <-- Use CommonModule here
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss'],
//   animations: [
//     trigger('highlight', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateX(-100%)' }),  // Initial state (before the element enters)
//         animate('500ms',  // 500ms for animation
//           keyframes([
//             style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
//           ])
//         )
//       ])
//     ])
//   ]
// })
// export class ProjectsComponent implements OnInit {
//   projects = [
//     {
//       name: 'Voice of Our Clients',
//       description:
//         'It is the application where clients of our organization can provide their insights. Worked on 15+ improvements and 50+ bugfixes. Migrated the application from Durandal and KnockoutJS to Angular. Involved in developing 10 screens, including 2 major ones. Designed and implemented responsive user interfaces for both web and mobile devices.',
//     },
//     {
//       name: 'Leadership Conference Workshop Tool',
//       description:
//         'This tool is used by leaders of the organization to share insights and ideas for the next financial year. Developed 5+ new functionalities and worked on 20+ defect fixes. Supported production during live issues and provided immediate solutions.',
//     },
//   ];

//   // Flag to control visibility of second project and awards section
//   showSecondProject: boolean = false;
//   showAwardsSection: boolean = false;

//   constructor() {}

//   ngOnInit(): void {
//     // Initially, show only the first project
//     this.showSecondProject = false;

//     // Simulate loading of second project after a delay (e.g., 2 seconds)
//     setTimeout(() => {
//       this.showSecondProject = true;
//     }, 2000); // Delay of 2 seconds for the second project
//   }

//   // Detect scroll or touch event to show awards section
//   @HostListener('window:scroll', ['$event'])
//   onScroll(event: any): void {
//     const scrollPosition = window.scrollY + window.innerHeight;
//     const project2Element = document.getElementById('second-project');

//     // If the second project is visible in the scroll position, show awards section
//     if (project2Element && scrollPosition >= project2Element.offsetTop + project2Element.offsetHeight) {
//       this.showAwardsSection = true;
//     }
//   }

//   @HostListener('touchstart', ['$event'])
//   onTouchStart(event: any): void {
//     const project2Element = document.getElementById('second-project');
//     if (project2Element) {
//       // Show awards section after touch if second project is shown
//       this.showAwardsSection = true;
//     }
//   }

//   // Detect if zoom level causes no scroll to happen
//   @HostListener('window:resize', ['$event'])
//   onResize(event: any): void {
//     const project2Element = document.getElementById('second-project');
//     if (project2Element) {
//       // Show awards section immediately if zooming or no scrolling is detected
//       this.showAwardsSection = true;
//     }
//   }
// }
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common'; // <-- Use CommonModule

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // <-- Use CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('highlight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),  // Initial state (before the element enters)
        animate('500ms',  // 500ms for animation
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ])
        )
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Voice of Our Clients',
      description:
        'It is the application where clients of our organization can provide their insights. Worked on 15+ improvements and 50+ bugfixes. Migrated the application from Durandal and KnockoutJS to Angular. Involved in developing 10 screens, including 2 major ones. Designed and implemented responsive user interfaces for both web and mobile devices.',
    },
    {
      name: 'Leadership Conference Workshop Tool',
      description:
        'This tool is used by leaders of the organization to share insights and ideas for the next financial year. Developed 5+ new functionalities and worked on 20+ defect fixes. Supported production during live issues and provided immediate solutions.',
    },
  ];

  showSecondProject: boolean = false;
  showAwardsSection: boolean = false;
  isScrolledOrTouched: boolean = false;  // Track if the user has interacted (scroll/touch)

  constructor() {}

  ngOnInit(): void {
    // Initially, show only the first project
    this.showSecondProject = false;

    // Simulate loading of second project after a delay (e.g., 2 seconds)
    setTimeout(() => {
      this.showSecondProject = true;
    }, 2000); // Delay of 2 seconds for the second project
  }

  // Detect scroll or touch event to show awards section
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const project2Element = document.getElementById('second-project');

    // If the second project is visible in the scroll position, show awards section
    if (project2Element && scrollPosition >= project2Element.offsetTop + project2Element.offsetHeight) {
      this.showAwardsSection = true;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: any): void {
    const project2Element = document.getElementById('second-project');
    if (project2Element) {
      // Show awards section after touch if second project is shown
      this.showAwardsSection = true;
    }
  }

  // Detect if zoom level causes no scroll to happen
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const project2Element = document.getElementById('second-project');
    if (project2Element) {
      // Show awards section immediately if zooming or no scrolling is detected
      this.showAwardsSection = true;
    }
  }
}

