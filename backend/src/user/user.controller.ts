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
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User-API')
@UseFilters(new HttpExceptionFilter())
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/email/check')
  async emailCheck(@Body() body: { email: string }, @Res() res: Response) {
    const { email } = body;
    return res.status(200).json(await this.userService.emailCheck(email));
  }
  @Post('/nickname/check')
  async nickNameCheck(
    @Body() body: { nickname: string },
    @Res() res: Response,
  ) {
    const { nickname } = body;
    return res.status(200).json(await this.userService.nicknameCheck(nickname));
  }
}
