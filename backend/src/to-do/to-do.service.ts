import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ToDo } from './entities.ts/to-do.entitity';
import moment from 'moment';
@Injectable()
export class ToDoService {
  constructor(private prisma: PrismaService) {}

  async addToDo(body, isDone): Promise<ToDo> {
    try {
      if (body) {
        const create = await this.prisma.list.create({
          data: { description: body, isDone: isDone },
        });
        if (create) return create;
      } else {
        throw new Error('error add ToDo');
      }
    } catch (e) {
      if (e) throw new Error(' db error');
    }
  }

  async getToDoAll(): Promise<any> {
    try {
      const list = await this.prisma.list.findMany();
      if (list) return { list: list };
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
      await this.prisma.list.update({
        where: { id },
        data: { isDone: isDone },
      });
    } catch (e) {
      if (e) return false;
    }
  }

  async getToDoDate(date: string) {
    if (date) {
      const startDay = moment(date).startOf('day').format();
      const endDay = moment(date).endOf('day').format();
      try {
        const list = await this.prisma.list.findMany({
          where: {
            createdAt: {
              gte: startDay,
              lte: endDay,
            },
          },
        });
        if (list) return list;
      } catch (e) {
        if (e) return false;
      }
    } else {
      throw new Error('not in date');
    }
  }
}
