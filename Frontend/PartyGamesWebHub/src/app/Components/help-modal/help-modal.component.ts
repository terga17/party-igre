import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-help-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './help-modal.component.html',
  styleUrl: './help-modal.component.css',
})
export class HelpModalComponent {}
