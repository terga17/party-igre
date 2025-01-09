import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InviteComponent } from '../../Components/invite/invite.component';

@Component({
  selector: 'app-buser',
  standalone: true,
  imports: [FontAwesomeModule, MatDialogModule],
  templateUrl: './buser.component.html',
  styleUrl: './buser.component.css'
})
export class BuserComponent {
  constructor(
    private router: Router,
    library: FaIconLibrary,
    private dialog: MatDialog
  ){
    library.addIconPacks(fas);
  }
  OpenFriendsList(){
    console.log('open');
    this.dialog.open(InviteComponent, {
      width: '450px',
    });
  }

  NavigateToPyramid() {
    this.router.navigate(['/pyramid']);
  }
  NavigateToHubPage() {
    this.router.navigate(['/hub']);
  }
}
