import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hub-page',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './hub-page.component.html',
  styleUrl: './hub-page.component.css',
})
export class HubPageComponent {
  constructor(private router: Router, library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  navigateToBuser() {
    this.router.navigate(['/hub']);
  }
}
