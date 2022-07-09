import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ToDoList } from './entities.ts/to-do.entitity';
@Injectable()
export class ToDoService {
  constructor(private prisma: PrismaService) {}
  async addToDo(body, isDone): Promise<ToDoList> {
    try {
      const create = await this.prisma.list.create({
        data: { description: body, isDone: isDone },
      });
      if (create) return create;
      else return { id: 0, description: body, isDone };
    } catch (e) {
      if (e) return { id: 0, description: body, isDone };
    }
  }
}
