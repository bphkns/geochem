import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavSideListItem } from './shared/components/sidenav-list/sidenav-list.component';

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
      name: 'home',
      link: 'pages/home',
      key: 'home',
    },
  ];
  constructor(public authService: AuthService) {}

  toggleSideNav() {
    this.opened = !this.opened;
  }

  login() {
    this.authService.loginWithRedirect();
  }
}
