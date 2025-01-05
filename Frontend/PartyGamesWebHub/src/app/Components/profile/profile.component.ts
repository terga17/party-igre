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
    this.displayFriends();
    console.log("User:",this.userService.getUserName());
  }

  statistics: any = {};
  loading: boolean = true;
  error: string | null = null;
  friends: any = {};
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

  displayFriends() {
    // userId je ID prijavljenega uporabnika
    const userId = this.userService.getUserId();
    this.apiService.fetchFriends(userId).subscribe(
      (response) => {
        this.apiService.getUsers().subscribe(allUsers => {
          const friends = response.user.friends;
          const friendUsernames: string[] = [];;

          friends.forEach((friend: any) => {
            // Find the username of each friend by matching friend.id with the users' id
            const matchedUser = allUsers.users.find((user:any) => user.id == friend.id);
            if (matchedUser) {
              friendUsernames.push(matchedUser.username); // Add the username to the array
            }
          });
          this.statistics.friendList = friendUsernames;
          this.statistics.friendCount = friendUsernames.length;
        })
      }
    );
  }
}
