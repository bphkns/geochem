import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthRoleGuard implements CanActivate {
  namespace = environment.namespace;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.pipe(
      map((user) => {
        if (!user) {
          return false;
        }
        const routeRoles = (route.data.roles as string[]) || [];
        const userRoles = (user[`${this.namespace}/roles`] as string[]) || [];
        const hasAccess = routeRoles.some(
          (role) =>
            role === '*' ||
            userRoles
              .map((userRole) => userRole.toLowerCase())
              .includes(role.toLowerCase())
        );

        if (!hasAccess) {
          const path = state.url.split('/');
          path.pop();
          path.push('unauthorized');
          this.router.navigate([...path]);
        }

        return hasAccess;
      })
    );
  }
}
