import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { PlayerController } from './player/player.controller';
import { HttpModule } from '@nestjs/axios';
import { PlayerService } from './player/player.service';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';
import { ToDoModule } from './to-do/to-do.module';
import { ConfigModule } from '@nestjs/config';
import { MariaConfigModule } from './config/database/config.module';
import { MariaConfigService } from './config/database/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forRootAsync({
      imports: [MariaConfigModule],
      useClass: MariaConfigService,
      inject: [MariaConfigService],
    }),
    ToDoModule,
  ],
  controllers: [UserController, PlayerController, ToDoController],
  providers: [PlayerService, ToDoService],
})
export class AppModule {}
