import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { PlayerController } from './player/player.controller';
import { HttpModule } from '@nestjs/axios';
import { PlayerService } from './player/player.service';
@Module({
  imports: [HttpModule],
  controllers: [UserController, PlayerController],
  providers: [PlayerService],
})
export class AppModule {}
