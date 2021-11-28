import { Component } from '@angular/core';

@Component({
  selector: 'geochem-navbar-right',
  template: `
    <div class="flex space-x-4 items-center justify-end">
      <ng-content> </ng-content>
    </div>
  `,
  styles: [],
})
export class NavbarRightComponent {}
