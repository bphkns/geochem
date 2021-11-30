import { InjectionToken } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GlobalState } from '@geochem/api-interfaces';

export const GLOBAL_APP_STATE = new InjectionToken<RxState<GlobalState>>(
  'GLOBAL_APP_STATE'
);
