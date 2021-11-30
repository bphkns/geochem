import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geochem-button',
  template: `
    <button
      type="button"
      class="py-2 px-4 flex justify-center items-center  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200
      text-center text-sm  tracking-tight
      shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded uppercase"
    >
      <ng-content> </ng-content>
    </button>
  `,
  styles: [],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
