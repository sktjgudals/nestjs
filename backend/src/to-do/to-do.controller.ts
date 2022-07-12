import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { ToDo } from './entities.ts/to-do.entitity';
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
    await this.toDoService.updateToDo(parseInt(id), body);
    return res.status(200).json('hi');
  }

  @Delete(':id')
  async deleteToDo(@Param('id') id: string, @Res() res: Response) {
    const result = await this.toDoService.deleteToDo(parseInt(id));
    if (result) return res.status(200).json(true);
    else return res.status(400).json(false);
  }
}
