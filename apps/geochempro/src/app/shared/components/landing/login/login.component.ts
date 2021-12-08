import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { filter, map, take } from 'rxjs';

@Component({
  selector: 'geochem-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        filter((paramsMap) => {
          return paramsMap.invitation && paramsMap.organization;
        }),
        take(1),
        map(({ invitation, organization }) => {
          this.authService.loginWithRedirect({
            organization,
            invitation,
          });
        })
      )
      .subscribe();

    this.authService.error$.subscribe((err) => console.log(err));
  }
}
