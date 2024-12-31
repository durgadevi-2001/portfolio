import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true, // This is required for standalone components
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'], // Fixes the typo
})

export class AboutComponent {

}
