import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { users } from './users.data';
import { IUser, IUserToken } from './interfaces';
import { UserLoginDto } from './dto';
import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class UsersService {

  constructor(private readonly authService: AuthService) {
  }

  findAll(): IUser[] {
    return users;
  }

  findOne(id: string): IUser {
    return users.find(user => user.id === id);
  }

  findOneByEmail(email: string): IUser {
    return users.find(user => user.email === email);
  }

  login(obj: UserLoginDto): IUserToken {
    const { email, password } = obj;
    const user = users.find(u => u.email === email);

    // For simplicity password is equal to the username
    if (!user || (user.username !== password)) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const token = this.authService.signPayload(user);

    return { user, token };
  }
}
