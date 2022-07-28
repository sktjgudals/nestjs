import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from 'src/error/http-exception.filter';
import { ToDo } from './entities.ts/to-do.entitity';
import { ToDoService } from './to-do.service';
import fs from 'node:fs';

@Controller('to-do')
@ApiTags('To-Do API')
@UseFilters(new HttpExceptionFilter())
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get('')
  async getToDos(@Res() res: Response) {
    return res.status(200).json(await this.toDoService.getToDoAll());
  }

  @Post('')
  async addToDo(@Body() body: ToDo, @Res() res: Response) {
    return res
      .status(200)
      .json(await this.toDoService.addToDo(body.description, body.isDone));
  }

  @Put(':id')
  async updateToDo(
    @Param('id') id: string,
    @Body() body: ToDo,
    @Res() res: Response,
  ) {
    return res
      .status(200)
      .json(await this.toDoService.updateToDo(parseInt(id), body));
  }

  @Delete(':id')
  async deleteToDo(@Param('id') id: string, @Res() res: Response) {
    return res
      .status(200)
      .json(await this.toDoService.deleteToDo(parseInt(id)));
  }

  @Post('/isdone')
  async isDoneToDo(@Body() body: ToDo, @Res() res: Response) {
    return res.status(200).json(await this.toDoService.isDoneUpdateToDo(body));
  }

  @Get(':date')
  async getToDoDate(@Param('date') date: string, @Res() res: Response) {
    return res.status(200).json(await this.toDoService.getToDoDate(date));
  }
}
