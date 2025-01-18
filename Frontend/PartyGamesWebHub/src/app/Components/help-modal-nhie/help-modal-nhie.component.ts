import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-help-modal-nhie',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './help-modal-nhie.component.html',
  styleUrl: './help-modal-nhie.component.css',
})
export class HelpModalNhieComponent {}
