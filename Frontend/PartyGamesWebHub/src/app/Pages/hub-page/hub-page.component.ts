import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hub-page.component.html',
  styleUrl: './hub-page.component.css',
})
export class HubPageComponent {
  constructor(private router: Router) {}
  navigateToBuser() {
    this.router.navigate(['/hub']);
  }
}
