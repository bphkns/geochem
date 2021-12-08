import { Component, Input } from '@angular/core';
import { panelInOut } from '../../animations/side-slide.animation';

export interface NavSideListItem {
  link: string;
  name: string;
  key: string;
  roles: string[];
}

@Component({
  selector: 'geochem-sidenav-list',
  template: `
    <ng-container *ngFor="let item of items">
      <a
        *ngIf="roles | hasRole: item.roles"
        class="flex px-2 py-2 items-end space-x-2 transition-alln duration-500 ease-in-out"
        [routerLink]="item.link"
        routerLinkActive="text-purple-500 bg-gray-100 shadow border-r-2 border-purple-400"
      >
        <geochem-icon-button [hoverAble]="!open">
          <svg-icon [key]="item.key" size="lg"></svg-icon
        ></geochem-icon-button>
        <span *ngIf="open" [@panelInOut]> {{ item.name }}</span>
      </a>
    </ng-container>
  `,
  styles: [],
  animations: [panelInOut],
})
export class SidenavListComponent {
  @Input()
  open = false;

  @Input()
  roles: string[] = [];

  @Input()
  items: NavSideListItem[] = [];
}
