import { Component, Input } from '@angular/core';
import { panelInOut } from '../../animations/side-slide.animation';

export interface NavSideListItem {
  link: string;
  name: string;
  key: string;
}

@Component({
  selector: 'geochem-sidenav-list',
  template: `
    <a
      *ngFor="let item of items"
      class="flex px-2 items-end space-x-1 transition-alln duration-500 ease-in-out"
      [routerLink]="item.link"
      routerLinkActive="text-blue-500"
    >
      <geochem-icon-button [hoverAble]="!open">
        <svg-icon key="home" size="xl"></svg-icon
      ></geochem-icon-button>
      <span *ngIf="open" [@panelInOut]> Home</span>
    </a>
  `,
  styles: [],
  animations: [panelInOut],
})
export class SidenavListComponent {
  @Input()
  open = false;

  @Input()
  items: {
    link: string;
    name: string;
    key: string;
  }[] = [];
}
