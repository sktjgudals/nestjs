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
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth-API')
@UseFilters(new HttpExceptionFilter())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/google/callback')
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    return await this.authService.googleCallback(req, res);
  }

  @Get('/google/link')
  async googleLink(@Res() res: Response) {
    return res.status(200).json(await this.authService.googleLink());
  }

  @Post('/google/validToken')
  async googleValidToken(@Body() body: string, @Res() res: Response) {
    return res
      .status(200)
      .json(await this.authService.getValidToken(body, res));
  }

  @Post('/validToken')
  async validToken(@Req() req: Request, @Res() res: Response) {
    return await this.authService.validToken(req, res);
  }

  @Get('/test')
  async test(@Res() res: Response) {
    return res.status(200).json({ name: 'test' });
  }

  @Delete(':id')
  async deleteToDo(@Param('id') id: string, @Res() res: Response) {}
}
