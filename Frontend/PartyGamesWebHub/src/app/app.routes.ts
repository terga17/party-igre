import { Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HubPageComponent } from './Pages/hub-page/hub-page.component';
import { BuserComponent } from './Components/buser/buser.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'hub', component: HubPageComponent },
  { path: 'buser', component: BuserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
