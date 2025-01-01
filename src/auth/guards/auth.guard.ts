import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Role Guards');
    const request = context.switchToHttp().getRequest() as Request;
    const authHeader = request.headers['x-custom-header'];
    if (!authHeader || authHeader !== 'nestjs_is_buetifull') {
      console.log('Invalid or missing custom header');
      return false;
    }
    console.log('Passes through guards..');
    return true;
  }
}
