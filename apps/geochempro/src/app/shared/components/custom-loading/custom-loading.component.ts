import { Component } from '@angular/core';
import { ILoadingCellRendererAngularComp } from 'ag-grid-angular';
import { ILoadingCellRendererParams } from 'ag-grid-community';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-loading-cell-renderer',
  template: `
    <div
      class="ag-custom-loading-cell"
      style="padding-left: 10px; line-height: 25px;"
    >
      <i class="fas fa-spinner fa-pulse"></i>
      <span> {{ this.params.loadingMessage }} </span>
    </div>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class CustomLoadingCellRenderer
  implements ILoadingCellRendererAngularComp
{
  params!: ILoadingCellRendererParams & { loadingMessage: boolean };

  agInit(
    params: ILoadingCellRendererParams & { loadingMessage: boolean }
  ): void {
    this.params = params;
  }
}
