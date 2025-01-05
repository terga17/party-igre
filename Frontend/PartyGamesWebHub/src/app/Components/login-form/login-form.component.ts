import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.fetchUsers();
  }

  navigateToHub() {
    this.router.navigate(['/hub']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  fetchUsers() {
    this.apiService.getUsers().subscribe(
      (response) => {
        this.users = response.users;
        console.log('Fetched users:', this.users); // Move console.log here
        const userString = localStorage.getItem('user'); // checks if user logged in browser
        if (userString) {
          const user = JSON.parse(userString);
          if (this.users.some(item => item.id == user.id && item.username == user.username)) {
            this.userService.setUserName(user.username);
            this.userService.setUserName(user.id);
            alert(`Welcome, ${user.username}!`);
            this.navigateToHub();
          }
        }

      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  loginUser() {
    const formData = this.loginForm.value;

    this.apiService
      .loginUser({
        username: formData.email,
        password: formData.password,
      })
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          localStorage.setItem("user",JSON.stringify(response.user)); // adds current user to localstorage
          this.userService.setUserName(response.user.username);
          this.userService.setUserId(response.user.id);
          alert(`Welcome, ${response.user.username}!`);
          this.navigateToHub();
        },
        (error) => {
          console.error('Login failed:', error);
          if (error.status === 401) {
            alert('Invalid username or password.');
          } else {
            alert('An error occurred during login. Please try again.');
          }
        }
      );
  }

  registerUser() {
    const formData = this.loginForm.value;

    const requestData = {
      username: formData.email,
      password: formData.password,
    };

    if (
      Array.isArray(this.users) &&
      this.users.some((user) => user.email === formData.email)
    ) {
      alert('User already exists!');
      return;
    }

    this.apiService.registerUser(requestData).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        alert('Registration successful! Please log in.');
      },
      (error) => {
        console.error('Registration failed:', error);
        alert('An error occurred during registration.');
        if (error.status === 422) {
          console.error('Backend validation errors:', error.error.errors);
        }
      }
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted');
    } else {
      console.log('Form is invalid');
    }
  }
}
