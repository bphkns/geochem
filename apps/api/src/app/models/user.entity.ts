import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  user_id: string;

  @ApiHideProperty()
  @Exclude()
  identities: Identity[] = [];

  email: string;

  email_verified: boolean;

  name: string;

  nickname: string;

  picture: string;

  created_at: string;

  updated_at: string;

  last_login: string;

  @Exclude()
  @ApiHideProperty()
  last_ip: string;
  @Exclude()
  @ApiHideProperty()
  logins_count: number;
}

export interface Identity {
  connection: string;
  provider: string;
  user_id: string;
  isSocial: boolean;
}
