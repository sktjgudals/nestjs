import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ToDoList } from './entities.ts/to-do.entitity';
import { List } from '@prisma/client';
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

  async getToDoAll(): Promise<any> {
    try {
      const list = await this.prisma.list.findMany();
      if (list) return list;
      else return;
    } catch (e) {
      if (e) return;
    }
  }

  async deleteToDo(id: number): Promise<any> {
    try {
      const res = await this.prisma.list.delete({
        where: { id },
      });
      if (res) return true;
      else return false;
    } catch (e) {
      if (e) return false;
    }
  }
}
