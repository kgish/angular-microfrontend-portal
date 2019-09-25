import { Role } from '../users/interfaces';

export interface IApp {
  id: string;
  name: string;
  module: string;
  description: string;
  avatar: string;
  link: string;
  url: string;
  roles: Role[];
}
