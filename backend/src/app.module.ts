import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { PlayerController } from './player/player.controller';
import { HttpModule } from '@nestjs/axios';
import { PlayerService } from './player/player.service';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [UserController, PlayerController, ToDoController],
  providers: [PlayerService, ToDoService],
})
export class AppModule {}
