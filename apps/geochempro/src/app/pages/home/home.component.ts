import { Component, Inject, OnInit } from '@angular/core';
import { GlobalState, User } from '@geochem/api-interfaces';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';
import { GLOBAL_APP_STATE } from '../../state/global-state';

@Component({
  selector: 'geochem-home',
  templateUrl: './home.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  user$: Observable<User | null | undefined>;

  constructor(@Inject(GLOBAL_APP_STATE) public state: RxState<GlobalState>) {
    // super();
    this.user$ = state.select('user');
  }

  ngOnInit(): void {}
}
