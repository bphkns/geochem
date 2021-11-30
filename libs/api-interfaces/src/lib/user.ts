export interface User {
  nickname?: string | undefined;
  name?: string | undefined;
  picture?: string | undefined;
  updated_at?: string | undefined;
  email?: string | undefined;
  email_verified?: boolean | undefined;
  org_id?: string;
  roles: string[];
}
