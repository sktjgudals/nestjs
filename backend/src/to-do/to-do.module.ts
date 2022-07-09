import { Module } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  providers: [ToDoService],
  controllers: [ToDoController],
})
export class ToDoModule {}
