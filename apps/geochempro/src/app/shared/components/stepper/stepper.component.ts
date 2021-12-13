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
  templateUrl: 'stepper.component.html',
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
