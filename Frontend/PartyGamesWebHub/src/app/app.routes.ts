import { Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HubPageComponent } from './Pages/hub-page/hub-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'hub', component: HubPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
