import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async emailCheck(body: string) {
    if (body === 'test@naver.com') {
      return { email: false };
    } else if (body === 'test@daum.net') {
      return { email: false };
    } else {
      return { email: true };
    }
  }

  async nicknameCheck(body: string) {
    if (body === 'test') {
      return { name: false };
    } else if (body === 'test2') {
      return { name: false };
    } else {
      return { name: true };
    }
  }
}
