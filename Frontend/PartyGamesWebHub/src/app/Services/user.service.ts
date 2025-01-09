import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string = '';
  private userId: string = '';
  
  constructor() {}

  setUserName(name: string) {
    this.userName = name;
  }

  setUserId(id: string) {
    this.userId = id;
  }

  getUserName(): string {
    if (!this.userName) {
      const userString = localStorage.getItem('user'); // checks if user logged in browser
      if (userString && userString != "guest") {
        const user = JSON.parse(userString);
        this.setUserName(user.username);        
      }
      else if (userString=="guest"){
        this.setUserName("guest");
      }
    }
    return this.userName;
  }

  getUserId(): string {
    if (!this.userId) {
      const userString = localStorage.getItem('user'); // checks if user logged in browser
      if (userString) {
        const user = JSON.parse(userString);
        this.setUserId(user.id);        
      }
    }
    return this.userId;
  }

}
