import { Component } from '@angular/core';

@Component({
  selector: 'geochem-settings',
  templateUrl: './settings.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
})
export class SettingsComponent {}
