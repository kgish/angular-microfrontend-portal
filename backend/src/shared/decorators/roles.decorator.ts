import { SetMetadata } from '@nestjs/common';
import { Role } from '../../users/interfaces';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
