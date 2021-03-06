export interface User {
  nickname?: string | undefined;
  name?: string | undefined;
  picture?: string | undefined;
  updated_at?: string | undefined;
  email?: string | undefined;
  email_verified?: boolean | undefined;
  user_id?: string;
  roles: string[];
}

export interface Role {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
}
