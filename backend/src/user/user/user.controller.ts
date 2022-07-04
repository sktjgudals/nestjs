import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  @Get()
  getAll() {
    return 'user';
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return `userId is ${id}`;
  }

  @Post()
  userSend() {
    return 'UserPost';
  }
}
