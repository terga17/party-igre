import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CommonModule } from '@angular/common';
import { TruthOrDareComponent } from './Components/truth-or-dare/truth-or-dare.component'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PartyGamesWebHub';
}
