import { catchError, endWith, map, of, startWith } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { RxState } from '@rx-angular/state';
import { environment } from './../../../../../environments/environment';
import { Role } from '@geochem/api-interfaces';

@Component({
  selector: 'geochem-add-user',
  templateUrl: './add-user.component.html',
  styles: [],
  providers: [RxState],
})
export class AddUserComponent implements OnInit {
  @HostBinding('class')
  class = `flex flex-col flex-grow bg-gray-100`;

  urls = {
    fetchRoles: `${environment.apiUrl}/users/roles`,
  };

  addUserForm: FormGroup;
  loadStates = {
    adding: false,
    fetchingRoles: false,
  };

  loadingRoles$ = this.state.select('loading');
  roles$ = this.state.select('roles');

  constructor(
    public dialogRef: DialogRef,
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) public document: Document,
    public state: RxState<{ roles: Role[]; loading: boolean }>
  ) {
    this.addUserForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      role_id: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    const fetchRoles$ = this.http.get<Role[]>(this.urls.fetchRoles).pipe(
      map((roles) => ({ roles })),
      catchError(() => of({ roles: [] })),
      startWith({ loading: true }),
      endWith({ loading: false })
    );

    this.state.connect(fetchRoles$);
  }

  close() {
    this.dialogRef.close();
  }

  addUser() {
    if (!this.addUserForm.valid) {
      return;
    }

    // const { value } = this.addUserForm;

    // this.http.post(`${environment.apiUrl}/users`, { ...value }).subscribe(
    //   () => {
    //     this.dialogRef.close(`Added`);
    //   },
    //   () => {}
    // );
  }
}
