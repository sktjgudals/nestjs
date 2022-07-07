import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import {} from './entities.ts/to-do.entitity';

@Injectable()
export class ToDoService {
  constructor(private dataSource: DataSource) {}
  async addToDo(id, body, isDone): Promise<any> {
    console.log(id, body);
    await this.dataSource.transaction(async (m: any) => {
      const aa = await m.find();
      console.log(aa);
    });
    return true;
  }
}
