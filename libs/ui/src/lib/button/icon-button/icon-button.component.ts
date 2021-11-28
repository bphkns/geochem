import { Component, Input } from '@angular/core';

@Component({
  selector: 'geochem-icon-button',
  template: `
    <div
      role="button"
      class="
      active:text-blue-500 active:animate-ping
      rounded-full
      flex
      items-center
      p-1
    "
      [ngClass]="{
        'hover:bg-gray-200': hoverAble,
        ' ring-2 ring-gray-200': shadow
      }"
    >
      <ng-content> </ng-content>
    </div>
  `,
  styles: [],
})
export class IconButtonComponent {
  @Input()
  hoverAble = true;

  @Input()
  shadow = false;
}
