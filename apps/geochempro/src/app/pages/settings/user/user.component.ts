import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { User } from '@geochem/api-interfaces';
import { DialogService } from '@ngneat/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { RxState } from '@rx-angular/state';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import {
  catchError,
  endWith,
  map,
  of,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { DataType } from '../../../shared/components/toast-alert/toast-alert.component';
import { environment } from './../../../../environments/environment';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'geochem-user',
  templateUrl: './user.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
    `,
  ],
  providers: [RxState],
})
export class UserComponent implements OnInit {
  defaultColDef: ColDef = {
    sortable: true,
    filter: 'agSetColumnFilter',
    suppressMenu: false,
    resizable: true,
  };
  columnDefs: ColDef[] = [
    {
      field: 'email',
    },
    { field: 'email_verified', headerName: 'Email Verified', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
    {
      field: 'nickname',
      headerName: 'Nickname',
      width: 150,
    },
    {
      field: 'picture',
    },
    {
      field: 'created_at',
      headerName: 'Created At',
    },
    {
      field: 'last_login',
      headerName: 'Last login',
    },
  ];
  users$ = this.state.select('users');
  loading$ = this.state.select('loading');
  gridApi!: GridApi;

  apiUrls = {
    getAll: `${environment.apiUrl}/users`,
  };

  @ViewChild(`errorAlertTemplate`) errorAlertTemplate!: TemplateRef<any>;

  loadUsers$ = new Subject();
  refreshUsers$ = this.loadUsers$.pipe(switchMap(() => this.fetchUsers()));

  constructor(
    private http: HttpClient,
    public state: RxState<{ users: User[]; loading: boolean }>,
    public dialog: DialogService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.state.connect(this.refreshUsers$);
  }

  onGridReady(event: GridReadyEvent) {
    const { api } = event;
    this.gridApi = api;
    this.loadUsers$.next(true);
  }

  fetchUsers() {
    this.gridApi.showLoadingOverlay();
    return this.http.get<User[]>(this.apiUrls.getAll).pipe(
      map((data) => {
        return { users: data };
      }),
      catchError(() => {
        this.toast.show<DataType>(this.errorAlertTemplate, {
          data: {
            type: 'danger',
            title: `Error !`,
            text: `Error while fetching data`,
          },
          dismissible: false,
          autoClose: false,
          style: {
            'margin-top': '60px',
            padding: 0,
          },
          position: 'top-right',
        });
        this.gridApi.hideOverlay();
        this.gridApi.showNoRowsOverlay();
        return of({ users: [], loading: false });
      }),
      startWith({ loading: true }),
      endWith({ loading: false })
    );
  }

  getId(data: User) {
    return data.user_id || '';
  }

  addUser() {
    this.dialog.open(AddUserComponent, {
      closeButton: false,
    });
  }

  dismissed() {
    this.toast.close();
  }

  retry() {
    this.toast?.close();
    this.loadUsers$.next(true);
  }
}
