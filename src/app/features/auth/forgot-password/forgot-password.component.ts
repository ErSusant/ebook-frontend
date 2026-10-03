import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ForgotPasswordComponent {
  email = '';
  loading = false;
  message = '';
  isSuccess = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  submit(): void {
    const trimmed = this.email.trim();

    if (!trimmed) {
      this.message = 'Please enter your email address.';
      this.isSuccess = false;
      return;
    }

    this.loading = true;
    this.message = '';

    this.authService.forgotPassword(trimmed).subscribe({
      next: () => {
        this.loading = false;
        this.isSuccess = true;
        this.message = 'Reset link sent successfully. Please check your email.';
        this.email = '';
      },
      error: (error) => {
        this.loading = false;
        this.isSuccess = false;
        this.message = error?.error?.message || 'Something went wrong. Please try again.';
      }
    });
  }

  goToLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }
}
