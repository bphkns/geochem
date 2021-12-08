import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geochem-ui-stepper',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
      }
    `,
  ],
  template: ` <section class="w-full h-full flex">
    <div class="w-52 bg-gray-100 p-2 pr-0 space-y-2 border-r border-gray-200">
      <h4 class="font-normal  text-xl text-purple-900">New Project Setup</h4>
      <div class="flex flex-col p-2 pr-0 border-l-4 border-gray-300 ">
        <div
          class="font-light flex justify-between items-center  p-2 rounded transition-all duration-300 ease-in-out "
          *ngFor="let step of steps; let i = index"
          role="button"
          [ngClass]="{
            'bg-purple-100 font-semibold text-purple-700': selectedIndex === i
          }"
          (click)="selectStepByIndex(i)"
        >
          Step {{ i }}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex-grow flex flex-col bg-gray-50">
      <div class="flex-grow">
        <ng-container [ngTemplateOutlet]="selected ? selected.content : null">
        </ng-container>
      </div>
      <div class="flex justify-end space-x-4 px-4 py-2">
        <button class="example-nav-button" cdkStepperPrevious>
          &larr; Prev
        </button>
        <button class="example-nav-button" cdkStepperNext>Next &rarr;</button>
      </div>
    </div>
  </section>`,
  providers: [
    {
      provide: CdkStepper,
      useExisting: StepperComponent,
    },
  ],
})
export class StepperComponent extends CdkStepper implements OnInit {
  ngOnInit() {}

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
