import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class AuthHelperService {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.loginWithRedirect({});
  }

  logout() {
    console.log(1);
    this.authService.logout({
      returnTo: `${environment.auth.redirectUri}?code=INVALID_SESSION&state=INVALID`,
    });
  }
}
