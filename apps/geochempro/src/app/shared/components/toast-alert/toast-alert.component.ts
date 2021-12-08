import { Component, Inject, Optional } from '@angular/core';
import { HotToastRef } from '@ngneat/hot-toast';

export interface DataType {
  type: 'success' | 'danger' | 'warn';
  title: string;
  text: string;
}

@Component({
  selector: 'geochem-toast-alert',
  template: `
    <geochem-ui-alert
      [title]="toastRef.data.title"
      [type]="toastRef.data.type"
      (isDismissed)="dismissed()"
    >
      {{ toastRef.data.text }}

      <div class="flex justify-end pt-1" alertClose>
        <button
          (click)="retry()"
          class="px-1.5 py-0.5  text-xs rounded-full border shadow-sm active:ring-2 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            /></svg
          >Retry
        </button>
      </div>
    </geochem-ui-alert>
  `,
})
export class GeochemToastAlertComponent {
  constructor(
    @Optional() @Inject(HotToastRef) public toastRef: HotToastRef<DataType>
  ) {}

  dismissed() {
    this.toastRef.close({
      dismissedByAction: false,
    });
  }

  retry() {
    this.toastRef.close({
      dismissedByAction: true,
    });
  }
}
