import { User } from '@geochem/api-interfaces';

export interface GlobalState {
  user: User | null | undefined;
  loading: boolean;
}
