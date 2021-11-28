import { Component, Input } from '@angular/core';

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
      class="flex justify-center items-end space-x-1"
      routerLink="key"
      routerLinkActive="text-blue-500"
    >
      <geochem-icon-button [hoverAble]="!open">
        <svg-icon key="home" size="xl"></svg-icon
      ></geochem-icon-button>
      <span *ngIf="open"> Home</span>
    </a>
  `,
  styles: [],
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
