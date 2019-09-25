import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppsController } from './apps/apps.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthService } from './shared/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET || 'secret',
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES || '30m'
      },
    }),
    SharedModule
  ],
  controllers: [AppController, AppsController, UsersController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {
  static authEnabled = true;
}
