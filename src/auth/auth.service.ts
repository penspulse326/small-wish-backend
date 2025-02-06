import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'message from signup' };
  }
  signin() {
    return { message: 'message from signin' };
  }
}
