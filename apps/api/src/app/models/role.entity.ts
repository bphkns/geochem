export class Role {
  constructor(role: Partial<Role>) {
    Object.assign(this, role);
  }

  id: string;
  name: string;
  description: string;
}
