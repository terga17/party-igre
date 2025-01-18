import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HelpModalComponent } from '../../Components/help-modal/help-modal.component';

@Component({
  selector: 'app-hub-page',
  standalone: true,
  imports: [FontAwesomeModule, MatDialogModule],
  templateUrl: './hub-page.component.html',
  styleUrl: './hub-page.component.css',
})
export class HubPageComponent {
  constructor(
    private router: Router,
    library: FaIconLibrary,
    private dialog: MatDialog
  ) {
    library.addIconPacks(fas);
  }

  OpenHelp() {
    console.log('open');
    this.dialog.open(HelpModalComponent, {
      width: '850px',
    });
  }
  NavigateToBus() {
    this.router.navigate(['/buser']);
  }
  navigateToSettings() {
    this.router.navigate(['/settings']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  NavigateToTruthOrDare() {
    this.router.navigate(['/truth-or-dare']);
  }
  NavigateToTicTacToe() {
    this.router.navigate(['/tic-tac-toe']);
  }
}
