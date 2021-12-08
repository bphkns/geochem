import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ManagementClient, ObjectWithId } from 'auth0';
import { AUTHZ_MGMT_CLIENT } from '../auth/auth.provider';
import authZConfig from '../config/authZ.config';
import { User } from '../models/user.entity';

@Injectable()
export class UserService {
  private connection_id = `con_6mGdCyQuJf6mVPPx`;
  constructor(
    @Inject(AUTHZ_MGMT_CLIENT) private client: ManagementClient,
    @Inject(authZConfig.KEY) private authConfig: ConfigType<typeof authZConfig>
  ) {}

  async getUsers() {
    const users = await this.client.getUsers();
    return users.map((user) => new User(user));
  }

  async getUser({ id }: ObjectWithId) {
    const user = await this.client.getUser({ id });
    return new User(user);
  }

  async createInvitation({
    email,
    role_id,
  }: {
    email: string;
    role_id: string;
  }) {
    return await this.client.organizations.createInvitation(
      {
        id: `org_paqMYnLk3QEOXwly`,
      },
      {
        invitee: {
          email: email,
        },
        inviter: {
          name: 'GeoChem Pro',
        },
        connection_id: this.connection_id,
        client_id: `8LvAH7jktc5qFIQf6R4UigwGFceHICsR`,
        send_invitation_email: true,
        // roles: [role_id],
      }
    );
  }

  async getRole({ id }: ObjectWithId) {
    return await this.client.getRole({ id });
  }
}
