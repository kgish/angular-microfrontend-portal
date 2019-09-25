import { Role } from './user-role.enum';

export interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  role: Role;
}
