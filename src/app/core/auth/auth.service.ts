import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private tokenKey = 'access_token';
  private refreshKey = 'session_token';
  private currentUser?: User;

  register(payload: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:9081/api/v1/auth/register', payload, { withCredentials: true });
  }

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http.post<any>(`${environment.authBaseUrl}/login`, credentials, { withCredentials: true }).pipe(
      tap((loginRes) => console.log('AuthService.login - login response:', loginRes)),
      switchMap((loginRes) => {
        const access = this.extractToken(loginRes);
        const refresh = loginRes?.data?.refreshToken ?? loginRes?.refreshToken ?? null;

        // This app must read the cookie in Angular guards, so cookies must be visible to JavaScript.
        if (access) {
          this.setCookies(access, refresh);
        }

        // Call refresh exactly once: prefer the refresh token from login response,
        // otherwise fall back to the refresh token stored in a cookie.
        let refreshPayload: any = {};
        const cookieRefresh = this.getCookie(this.refreshKey);
        if (refresh) {
          refreshPayload = { refreshToken: refresh };
        } else if (cookieRefresh) {
          refreshPayload = { refreshToken: cookieRefresh };
        }
        console.log('AuthService.login - calling refresh once with payload:', refreshPayload);
        return this.http.post<any>(`${environment.authBaseUrl}/refresh`, refreshPayload, { withCredentials: true }).pipe(
          tap((refreshRes) => {
            console.log('AuthService.login - refresh response:', refreshRes);
            if (!refreshRes || refreshRes?.success !== true) {
              throw new Error('Refresh failed or returned success!=true');
            }
            const newAccess = this.extractToken(refreshRes);
            const newRefresh = refreshRes?.data?.refreshToken ?? refreshRes?.refreshToken ?? refresh;
            if (newAccess || newRefresh) {
              this.setCookies(newAccess, newRefresh);
            }
          }),
          map(() => loginRes)
        );
      }),
      map((response) => {
        const user = response?.user ?? response?.data?.user ?? response?.data ?? response;
        this.currentUser = user && typeof user === 'object' ? user : undefined;
        return this.currentUser ?? (response as User);
      })
    );
  }

  logout(): void {
    this.currentUser = undefined;
    // clear client-side cookies
    this.deleteCookie(this.tokenKey);
    this.deleteCookie(this.refreshKey);
  }

  isAuthenticated(): boolean {
    return !!this.getCookie(this.tokenKey);
  }

  getToken(): string | null {
    return this.getCookie(this.tokenKey);
  }

  getUser(): User | undefined {
    return this.currentUser;
  }

  logoutRequest() {
    return this.http.post<any>(`${environment.authBaseUrl}/logout`, {}, { withCredentials: true });
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${environment.authBaseUrl}/forgot-password`, { email }, { withCredentials: true });
  }

  private storeToken(token: string): void {
    if (token) {
      document.cookie = `${this.tokenKey}=${token}; path=/; SameSite=Lax`;
    }
  }

  private storeRefreshToken(token: string | null): void {
    if (token) {
      document.cookie = `${this.refreshKey}=${token}; path=/; SameSite=Lax`;
    }
  }

  private extractToken(response: any): string | null {
    if (!response) {
      return null;
    }

    if (typeof response === 'string') {
      return response;
    }

    const nestedData = response?.data;
    const token = response?.token ?? response?.accessToken ?? response?.jwt ?? nestedData?.token ?? nestedData?.accessToken ?? nestedData?.jwt;

    return token ?? null;
  }

  private setCookies(accessToken: string | null, refreshToken: string | null): void {
    if (accessToken) {
      this.storeToken(accessToken);
    }
    if (refreshToken) {
      this.storeRefreshToken(refreshToken);
    }
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  private deleteCookie(name: string): void {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  }
}
