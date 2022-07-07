import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';
import { ToDoDatatbase } from './entities.ts/to-do.entitity';
@Module({
  imports: [TypeOrmModule.forFeature([ToDoDatatbase])],
  providers: [ToDoService],
  controllers: [ToDoController],
})
export class ToDoModule {}
