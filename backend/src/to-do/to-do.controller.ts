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
import { ToDoData } from './entities.ts/user.entitity';

@Controller('to-do')
@ApiTags('To-Do API')
export class ToDoController {
  @Get('')
  getPlayers() {
    return 'hi';
  }
  @Post(':id')
  getOne(
    @Param('id') id: string,
    @Body() body: ToDoData,
    @Res() res: Response,
  ) {
    console.log(body.description, body.isDone);
    return res.status(200).json(true);
  }
}
