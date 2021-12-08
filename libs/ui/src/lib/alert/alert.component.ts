import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'geochem-ui-alert',
  template: `
    <div
      class="w-full h-full flex flex-col items-start border-l-4 py-2"
      role="alert"
      [ngClass]="{
        ' border-red-600 text-red-600': this.type === 'danger',
        ' border-yellow-600 text-yellow-600': this.type === 'warn',
        ' border-green-600 text-green-600': this.type === 'success'
      }"
    >
      <div class="flex flex-grow">
        <div class="px-2 flex-grow">
          <p class="font-bold" *ngIf="title">{{ title }}</p>
          <ng-content> </ng-content>
        </div>
        <div class="flex" role="button" (click)="dismissAlert()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex justify-end w-full">
        <ng-content select="[alertClose]"> </ng-content>
      </div>
    </div>
  `,
})
export class AlertComponent {
  @Input()
  type!: 'success' | 'warn' | 'danger';

  @Input()
  title!: string;

  @Output()
  isDismissed = new EventEmitter<boolean>();

  constructor(private host: ElementRef) {}

  dismissAlert() {
    this.isDismissed.emit();
  }
}
