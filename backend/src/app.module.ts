import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { PlayerController } from './player/player.controller';
import { HttpModule } from '@nestjs/axios';
import { PlayerService } from './player/player.service';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';
import { ToDoDatatbase } from './to-do/entities.ts/to-do.entitity';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3316,
      username: 'root',
      password: 'asdf',
      database: 'test',
      entities: [ToDoDatatbase],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ToDoModule,
  ],
  controllers: [UserController, PlayerController, ToDoController],
  providers: [PlayerService, ToDoService],
})
export class AppModule {}
