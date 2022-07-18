import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ToDo } from './entities.ts/to-do.entitity';

@Injectable()
export class ToDoService {
  constructor(private prisma: PrismaService) {}

  async addToDo(body, isDone): Promise<ToDo> {
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

  async updateToDo(id: number, body: ToDo) {
    try {
      const res = await this.prisma.list.update({
        where: { id },
        data: { description: body.description, isDone: body.isDone },
      });
      if (res) return true;
      else return false;
    } catch (e) {
      if (e) return false;
    }
  }

  async isDoneUpdateToDo(body: ToDo) {
    try {
      const { id, isDone } = body;
      const res = await this.prisma.list.update({
        where: { id },
        data: { isDone: isDone },
      });
      console.log(res);
    } catch (e) {
      if (e) return false;
    }
  }
}
