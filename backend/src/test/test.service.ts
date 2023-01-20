import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

let arr = [
  { id: 0, text: `This action returns all test` },
  { id: 1, text: 'Text is good' },
];
@Injectable()
export class TestService {
  create(body: any) {
    console.log(body);
    arr.push(body);
    return 'This action adds a new test';
  }

  findAll() {
    return arr;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
