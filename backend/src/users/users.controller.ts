import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserLoginDto } from './dto';
import { IUser, IUserToken } from './interfaces';
import { UsersService } from './users.service';
import { RolesGuard } from '../shared/auth/guards/roles.guard';
import { Roles } from '../shared/decorators/roles.decorator';

@Controller()
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @Get('users')
  @UseGuards(AuthGuard(), RolesGuard)
  @Roles('admin', 'support')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('users/:id')
  @UseGuards(AuthGuard(), RolesGuard)
  @Roles('admin', 'support')
  findOne(@Param('id') id: string): IUser {
    return this.usersService.findOne(id);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() data: UserLoginDto): IUserToken {
    return this.usersService.login(data);
  }
}
