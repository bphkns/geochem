import { Component, Input } from '@angular/core';

@Component({
  selector: 'geochem-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styles: [
    `
      :host {
        flex-grow: 1;
      }
    `,
  ],
})
export class DashboardCardComponent {
  @Input()
  key!: string;

  @Input()
  text!: string;

  @Input()
  count!: string;

  @Input()
  color!: string;
}
