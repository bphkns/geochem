import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'geochem-ui-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [],
})
export class SidenavComponent implements OnInit {
  @Input()
  opened = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.opened = !this.opened;
  }
}
