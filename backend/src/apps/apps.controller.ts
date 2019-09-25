import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { IApp } from './apps.model';
import { APPS } from './apps.data';
import { UsersService } from '../users/users.service';
import { UserFromToken } from '../shared/decorators';

@Controller('apps')
export class AppsController {

  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll(@UserFromToken() user): IApp[] {
    return APPS.filter(a => a.roles.indexOf(user.role) !== -1);
  }
}
