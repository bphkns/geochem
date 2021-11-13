import { Component } from '@angular/core';

@Component({
  selector: 'geochem-icon-button',
  template: `
    <div
      role="button"
      class="
      hover:bg-gray-200
      active:text-blue-500 active:animate-ping
      rounded-full
      flex
      items-center
      p-1
    "
    >
      <ng-content> </ng-content>
    </div>
  `,
  styles: [],
})
export class IconButtonComponent {}
