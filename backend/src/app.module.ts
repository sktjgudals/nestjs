import { Module } from '@nestjs/common';
import { UserController } from './user/user/user.controller';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
