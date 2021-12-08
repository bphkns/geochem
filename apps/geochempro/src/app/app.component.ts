import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GlobalState } from '@geochem/api-interfaces';
import { NavSideListItem } from './shared/components/sidenav-list/sidenav-list.component';
import { GLOBAL_APP_STATE } from './state/global-state';
import { RxState } from '@rx-angular/state';
import { filter, map } from 'rxjs';
@Component({
  selector: 'geochem-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  currentDate = new Date();
  opened = false;
  items: NavSideListItem[] = [
    {
      name: 'Home',
      link: 'pages/home',
      key: 'home',
      roles: ['*'],
    },
    {
      name: 'Projects',
      link: 'pages/projects',
      key: 'list',
      roles: ['org-admin'],
    },
    {
      name: 'Settings',
      link: 'pages/settings',
      key: 'settings',
      roles: ['org-admin'],
    },
  ];
  constructor(
    public authService: AuthService,
    @Inject(GLOBAL_APP_STATE) public state: RxState<GlobalState>
  ) {
    this.state.connect(
      'user',
      this.authService.user$.pipe(
        filter((user) => !!user),
        map((user) => {
          return (
            user && {
              ...user,
              roles: user[`https://auth.geochempro.com/roles`],
            }
          );
        })
      )
    );
    this.state.connect('loading', this.authService.isLoading$);
  }

  toggleSideNav() {
    this.opened = !this.opened;
  }

  login() {
    this.authService.loginWithRedirect({
      redirectMethod: 'replace',
    });
  }
}
