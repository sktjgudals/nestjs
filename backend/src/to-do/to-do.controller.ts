import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { ToDoList } from './entities.ts/to-do.entitity';
import { ToDoService } from './to-do.service';

@Controller('to-do')
@ApiTags('To-Do API')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}
  @Get('')
  getToDos() {
    return 'hi';
  }
  @Post(':id')
  addToDo(
    @Param('id') id: string,
    @Body() body: ToDoList,
    @Res() res: Response,
  ) {
    this.toDoService.addToDo(id, body.description, body.isDone);
    return res.status(200).json(true);
  }
}
