import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@geochem/api-interfaces';

@Component({
  selector: 'geochem-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  currentDate = new Date();

  opened = true;

  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  toggleSideNav() {
    this.opened = !this.opened;
  }
}
