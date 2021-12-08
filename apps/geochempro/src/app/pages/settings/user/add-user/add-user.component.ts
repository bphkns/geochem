import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'geochem-add-user',
  templateUrl: './add-user.component.html',
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
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(
    public dialogRef: DialogRef,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.addUserForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  addUser() {
    if (!this.addUserForm.valid) {
      return;
    }

    const { value } = this.addUserForm;

    this.http.post(`${environment.apiUrl}/users`, { ...value }).subscribe(
      () => {
        this.dialogRef.close(`Added`);
      },
      () => {}
    );
  }
}
