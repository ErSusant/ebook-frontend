import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService } from './core/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Book Management';
  showHeader = false;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.updateHeaderVisibility());

    this.updateHeaderVisibility();
  }

  private updateHeaderVisibility(): void {
    const currentUrl = this.router.url;
    const isAuthRoute = currentUrl === '/' || currentUrl.startsWith('/auth');
    const isLoggedIn = this.authService.isAuthenticated() || !!localStorage.getItem('username');
    this.showHeader = !isAuthRoute && isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.authService.logoutRequest().subscribe({
      next: () => {
        this.router.navigateByUrl('/auth/login');
      },
      error: () => {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
