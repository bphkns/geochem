import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geochem-profile',
  template: `
    <div>
      <geochem-icon-button [shadow]="true" [tippy]="one" variation="menu">
        <svg-icon key="profile-details" size="xl"> </svg-icon>
      </geochem-icon-button>
    </div>

    <ng-template #one>
      <div
        class="py-1 divide-y divide-gray-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          class="flex items-center text-gray-400 px-4 py-2 select-none space-x-2"
        >
          <svg-icon size="xl" key="man-avatar"> </svg-icon>
          <span class="break-all"> John Jackson </span>
        </div>
        <a
          href="#"
          class="flex items-center  px-4 py-2 space-x-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-700 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
          role="menuitem"
        >
          <div class="flex items-center  p-1 rounded-full shadow-inner">
            <svg-icon size="lg" key="profile-user"></svg-icon>
          </div>
          <span> Profile </span>
        </a>
        <a
          href="#"
          class="flex items-center  px-4 py-2 space-x-2 text-md text-gray-700 hover:bg-gray-100 hover:text-blue-700 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
          role="menuitem"
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
  constructor() {}

  ngOnInit(): void {}
}
