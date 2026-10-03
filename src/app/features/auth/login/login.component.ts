import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  loading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {

    if (!this.email || !this.password) {
      console.log('Email and Password are required.');
      this.errorMessage = 'Email and Password are required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const loginRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (user: any) => {
        this.loading = false;
        const username = user?.username ?? user?.user?.username ?? user?.data?.username;
        const role = user?.role ?? user?.user?.role ?? user?.data?.role;

        if (username) {
          localStorage.setItem('username', username);
        }
        if (role) {
          localStorage.setItem('role', role);
        }

        // AuthService performs login -> refresh; navigate only when both succeed
        this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        this.loading = false;
        if (error?.status === 401) {
          this.errorMessage = 'Invalid Email or Password';
        } else {
          this.errorMessage = 'Something went wrong. Please try again.';
        }
        console.error('Login error', error);
      }
    });

  }

}