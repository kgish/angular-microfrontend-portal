import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { sign, SignOptions } from 'jsonwebtoken';

import { UsersService } from '../../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { IUser } from '../../users/interfaces';

@Injectable()
export class AuthService {

  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;

  logger: Logger;

  constructor(
    @Inject(forwardRef(() => UsersService))
    readonly userService: UsersService) {
    this.logger = new Logger('AuthService');
    this.jwtOptions = { expiresIn: process.env.JWT_EXPIRES || '30m' };
    this.jwtKey = process.env.JWT_SECRET || 'secret';
    this.logger.log(`constructor() ${JSON.stringify({ jwtKey: this.jwtKey, jwtOptions: this.jwtOptions })}`);
  }

  validateUser(payload: JwtPayload): IUser {
    const result = this.userService.findOneByEmail(payload.email);
    this.logger.log(`validateUser() payload='${JSON.stringify(payload)}' => ${JSON.stringify(result)}`);
    return result;
  }

  signPayload(payload: JwtPayload): string {
    const result = sign(payload, this.jwtKey, this.jwtOptions);
    this.logger.log(`signPayload() payload='${JSON.stringify(payload)}' => ${result}`);
    return result;
  }
}
