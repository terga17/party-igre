import { Routes } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HubPageComponent } from './Pages/hub-page/hub-page.component';
import { BuserComponent } from './Components/buser/buser.component';
import { TruthOrDareComponent } from './Components/truth-or-dare/truth-or-dare.component';
import { TicTacToeComponent } from './Components/tic-tac-toe/tic-tac-toe.component';
import { PyramidComponent } from './Pages/drive-the-bus/pyramid/pyramid.component';
import { BusComponent } from './Pages/drive-the-bus/bus/bus.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NeverhaveieverComponent } from './Components/neverhaveiever/neverhaveiever.component';
import { authGuard } from './Services/auth.guard';
export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'hub', component: HubPageComponent, canActivate: [authGuard] },
  { path: 'buser', component: BuserComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
  { path: 'bus', component: BusComponent, canActivate: [authGuard] },
  { path: 'pyramid', component: PyramidComponent, canActivate: [authGuard] },
  {
    path: 'neverhaveiever',
    component: NeverhaveieverComponent,
    canActivate: [authGuard],
  },
  {
    path: 'truth-or-dare',
    component: TruthOrDareComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent,
    canActivate: [authGuard],
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
