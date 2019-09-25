/* tslint:disable:no-string-literal */
import { createParamDecorator } from '@nestjs/common';
import { decode } from 'jsonwebtoken';
import { IUser } from '../../users/interfaces';

// Extract the user from the token passed via the authentication header.
export const UserFromToken = createParamDecorator((data, req) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];
  const decoded = decode(token, { complete: true });
  return decoded['payload'] as IUser;
});
