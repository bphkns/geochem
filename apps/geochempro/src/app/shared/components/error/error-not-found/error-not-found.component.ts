import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geochem-error-not-found',
  templateUrl: './error-not-found.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
      }
    `,
  ],
})
export class ErrorNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
