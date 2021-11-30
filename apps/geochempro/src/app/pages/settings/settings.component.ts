import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

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
export class SettingsComponent implements OnInit {
  columnDefs: ColDef[] = [
    {
      field: 'make',
      flex: 1,
      floatingFilter: true,
      filter: 'agTextColumnFilter',
      suppressMenu: true,
    },
    { field: 'model', flex: 1 },
    { field: 'price', flex: 1 },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
