import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  logger = new Logger(PermissionsGuard.name);
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const routePermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler()
    );

    const userPermissions = context.getArgs()[0]?.user?.permissions || [];

    if (!routePermissions) {
      return true;
    }

    const hasPermission = () =>
      routePermissions.every((routePermission) =>
        userPermissions.includes(routePermission)
      );

    if (hasPermission()) {
      return true;
    }

    this.logger.error(`User doesn't have permission ${routePermissions}`);
    throw new ForbiddenException(
      `Not enough permissions to perform the operations`
    );
  }
}
