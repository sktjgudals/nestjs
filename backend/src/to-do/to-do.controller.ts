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
  async getToDos(@Res() res: Response) {
    return res.status(200).json(await this.toDoService.getToDoAll());
  }

  @Post('')
  async addToDo(@Body() body: ToDoList, @Res() res: Response) {
    return res
      .status(200)
      .json(await this.toDoService.addToDo(body.description, body.isDone));
  }
}
