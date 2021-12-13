import { Component, Input, OnInit } from '@angular/core';
import { User } from '@geochem/api-interfaces';
import { AuthHelperService } from '../../../../auth/auth.service';

@Component({
  selector: 'geochem-profile',
  template: `
    <div class="flex space-x-2  p-2 items-center rounded shadow" *ngIf="user">
      <div class="flex rounded-full">
        <img class="object-cover rounded-full w-6 h-6" [src]="user.picture" />
      </div>
      <div class="flex items-center text-gray-700 select-none space-x-2">
        <span class="break-all"> {{ user.nickname }} </span>
        <geochem-icon-button
          [shadow]="true"
          [hoverAble]="true"
          [tippy]="one"
          variation="menu"
          placement="auto"
        >
          <svg-icon key="key-down" size="md"> </svg-icon>
        </geochem-icon-button>
      </div>
    </div>

    <ng-template #one>
      <div
        class="py-1 divide-y divide-gray-100 w-52"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href="#"
          class="flex items-center  px-4 py-1 space-x-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-700 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
          role="menuitem"
        >
          <div class="flex items-center  p-1 rounded-full shadow-inner">
            <svg-icon size="lg" key="profile-user"></svg-icon>
          </div>
          <span> Profile </span>
        </a>
        <a
          class="flex items-center  px-4 py-1 space-x-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-700 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
          role="menuitem"
          (click)="logout()"
        >
          <div
            class="flex items-center bg-gray-100 p-1 rounded-full shadow-inner"
          >
            <svg-icon size="lg" key="lock"></svg-icon>
          </div>
          <span> Log Out </span>
        </a>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  @Input()
  user!: User;

  constructor(private authhelper: AuthHelperService) {}

  ngOnInit(): void {}

  logout() {
    this.authhelper.logout();
  }
}
