import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  constructor(private router: Router) {}

  setting1: string = '';
  setting2: string = '';
  setting3: string = '';
  setting4: string = '';

  settingsArray: { setting1: string; setting2: string }[] = [];

  saveSettings() {
    const currentSettings = {
      setting1: this.setting1,
      setting2: this.setting2,
      setting3: this.setting3,
      setting4: this.setting4,
    };
    this.settingsArray.push(currentSettings);

    console.log('Saved settings:', this.settingsArray);
  }

  cancelSettings() {
    this.setting1 = '';
    this.setting2 = '';
    this.setting3 = '';
    this.setting4 = '';
    this.router.navigate(['/hub']);
  }
}
