import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Req,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TestService } from './test.service';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: any) {
    return this.testService.create(createTestDto);
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    return res.json(await this.testService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
