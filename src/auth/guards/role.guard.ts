import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Role Guards');
    const handlerRoles = this.reflector.get<string[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    console.log(handlerRoles);
    if (!handlerRoles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('Passes through role guard...');
    return (
      user &&
      user.roles &&
      handlerRoles.some((role) => user.roles.includes(role))
    );
  }
}
