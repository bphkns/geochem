import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class AuthHelperService {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.loginWithRedirect();
  }

  logout() {
    this.authService.logout({ localOnly: false });
  }
}
