import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruthOrDareComponent } from './Components/truth-or-dare/truth-or-dare.component';
import { TicTacToeComponent } from './Components/tic-tac-toe/tic-tac-toe.component'; // adjust the path as needed

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
  ],
};

@NgModule({
  declarations: [TruthOrDareComponent, TicTacToeComponent],
  imports: [CommonModule],
  exports: [TruthOrDareComponent, TicTacToeComponent],
})
export class TruthOrDareModule {}
