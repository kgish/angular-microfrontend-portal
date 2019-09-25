import { Role } from '../../../users/interfaces';

export interface JwtPayload {
  email: string;
  username: string;
  role: Role;
}
