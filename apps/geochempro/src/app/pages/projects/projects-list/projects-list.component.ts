import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../../../shared/components/stepper/stepper.component';

@Component({
  selector: 'geochem-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
      }
    `,
  ],
})
export class ProjectsListComponent implements OnInit {
  ngOnInit(): void {}
}
