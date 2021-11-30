import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthRoleGuard implements CanActivate {
  namespace = environment.namespace;
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.pipe(
      map((user) => {
        if (!user) {
          return false;
        }
        const routeRoles = (route.data.roles as string[]) || [];
        const userRoles = (user[`${this.namespace}/roles`] as string[]) || [];
        return routeRoles.some((role) =>
          userRoles
            .map((role) => role.toLowerCase())
            .includes(role.toLowerCase())
        );
      })
    );
  }
}
