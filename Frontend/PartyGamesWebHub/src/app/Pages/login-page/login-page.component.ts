import { Component } from '@angular/core';
import { LoginFormComponent } from '../../Components/login-form/login-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
