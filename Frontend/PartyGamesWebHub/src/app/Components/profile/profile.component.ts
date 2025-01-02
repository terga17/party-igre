import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { ApiService } from '../../Services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  //implements OnInit
  userName: string = '';
  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router: Router
  ) {
    this.userName = this.userService.getUserName();
    this.fetchUserStatistics();
  }

  statistics: any = {};
  loading: boolean = true;
  error: string | null = null;

  // ngOnInit(): void {
  // }

  fetchUserStatistics() {
    this.apiService.getUserStatistics().subscribe(
      (response) => {
        this.statistics = response;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load statistics';
        this.loading = false;
        console.error(error);
      }
    );
  }

  returnToHub() {
    this.router.navigate(['/hub']);
  }
}
