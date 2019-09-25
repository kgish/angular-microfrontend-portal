import { IUser } from './interfaces';

export const users: IUser[] = [
  {
    id: '1',
    username: 'admin',
    name: 'Bender Rodriquez',
    email: 'admin@acme.nl',
    role: 'admin'
  },
  {
    id: '2',
    username: 'support',
    name: 'Philip J. Fry',
    email: 'support@acme.nl',
    role: 'support'
  },
  {
    id: '3',
    username: 'operator',
    name: 'Professor Farnsworth',
    email: 'operator@acme.nl',
    role: 'operator'
  },
  {
    id: '4',
    username: 'user',
    name: 'Zapp Brannigan',
    email: 'user@acme.nl',
    role: 'user'
  }
];
