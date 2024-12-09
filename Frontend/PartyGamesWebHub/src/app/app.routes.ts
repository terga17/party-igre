import { Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HubPageComponent } from './Pages/hub-page/hub-page.component';
import { BuserComponent } from './Components/buser/buser.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ProfileComponent } from './Components/profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'hub', component: HubPageComponent },
  { path: 'buser', component: BuserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
