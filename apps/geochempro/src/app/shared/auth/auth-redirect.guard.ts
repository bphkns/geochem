import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthRedirectGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthenticated$.pipe(
      tap((status) => {
        if (!status) {
          this.router.navigateByUrl('login');
        }
      })
    );
  }
}
