import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Passed through middleware');
    const user = {
      id: 1,
      username: 'test_user',
      roles: ['admin'],
    };

    (req as any).user = user;
    next();
  }
}
