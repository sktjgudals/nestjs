import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { List, Prisma } from '@prisma/client';
@Injectable()
export class ToDoService {
  constructor(private prisma: PrismaService) {}
  async addToDo(id, body, isDone): Promise<any> {
    console.log(id, body);
    const res = await this.prisma.list.findMany({});
    console.log(res);
    return true;
  }
}
