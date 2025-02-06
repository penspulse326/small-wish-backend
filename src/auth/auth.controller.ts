import { Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(200)
  signup(): string {
    return '歡迎註冊';
  }

  @Post('signin')
  @HttpCode(200)
  signin(): string {
    return '歡迎登入';
  }
}
