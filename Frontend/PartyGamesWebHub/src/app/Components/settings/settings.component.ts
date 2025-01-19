import { Component, resolveForwardRef } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { UserService } from '../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  userName: string = '';
  userId: string = '';
  friendList: any[] = [];
  allUsers: any[] = [];
  friendRequests: any[] = [];
  constructor(
    private userService: UserService,
    private router: Router,
    private apiService: ApiService,
  ) {
    this.userName = this.userService.getUserName();
    this.userId = this.userService.getUserId();
    if (!this.userName) { // if nobody logged in 
      this.router.navigate(['/']);
    }

    this.displayFriends();
  }

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

  displayFriends() {
    // userId je ID prijavljenega uporabnika
    const userId = this.userService.getUserId();
    console.log("Searching for users friends...");
    this.friendList = [];
    this.apiService.fetchFriends(userId).subscribe(
      (response) => {
        this.apiService.getUsers().subscribe(allUsers => {
          this.allUsers = allUsers.users;
          const friends = response.user.friends;
          console.log(response.user.friends)
          friends.forEach((friend: any) => {
            // Find the username of each friend by matching friend.id with the users' id
            const matchedUser = allUsers.users.find((user: any) => user.id == friend.id);
            if (matchedUser) {
              this.friendList.push(matchedUser); // Add the username to the array
            }
          });

          console.log("User friends: ", this.friendList);

          this.displayFriendRequests();
        })
      }
    );
  }

  requestUsername: string = '';

  sendFriendRequest() {
    if (this.requestUsername != '') {
      alert(`${this.userName}, id: ${this.userId}\n sent friend request to: ${this.requestUsername}`);
    }
    this.apiService.sendFriendRequest(this.userId, this.requestUsername).subscribe(response => {
      console.log(response);
      this.displayFriends();
    });
  }

  removeFriend(username: string) {
    alert(`Removed friend: ${username}`);
    this.apiService.removeFriend(this.userId, username).subscribe(response => {
      console.log(response);
      this.displayFriends();
    })
  }

  displayFriendRequests() {
    this.apiService.fetchPendingRequests(this.userId).subscribe(response => {
      const friendRequests = response.pending_requests;
      this.friendRequests = [];
      console.log("Requests: ", friendRequests);
      if (friendRequests) {
        friendRequests.forEach((fRequest: any) => {
          const matchedUser = this.allUsers.find((user: any) => user.id == fRequest.sender_id);
          if (matchedUser) {
            console.log("Wants to be your friend: ", matchedUser); // Add the username to the array
            this.friendRequests.push({ "user": matchedUser, "request_id": fRequest.id });
          }
        })
      }
    })
  }

  acceptRequest(requestId: string) {
    alert(`Accepted friend request!`);
    this.apiService.acceptFriendRequest(this.userId, requestId).subscribe(response => {
      console.log(response);
      this.displayFriends();
    });
  }

  rejectRequest(requestId: string) {
    alert(`Rejected friend request!`);
    this.apiService.rejectFriendRequest(this.userId, requestId).subscribe(response => {
      console.log(response);
      this.displayFriends();
    });
  }

}
