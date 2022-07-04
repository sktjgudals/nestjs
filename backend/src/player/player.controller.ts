import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VirtualTimeScheduler } from 'rxjs';

import { Player } from './entities.ts/player.entitity';
import { PlayerService } from './player.service';

@Controller('player')
@ApiTags('피파 선수 API')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}
  @Get('')
  getPlayers(
    @Query('skip') skip: number,
    @Query('take') take: number,
  ): Player[] {
    if (take - skip > 500) {
      return this.playerService.getPlayers(skip, 499);
    }
    return this.playerService.getPlayers(skip, take);
  }
  //   @Get(':name')
  //   getOne(@Param('name') name: string) {
  //     spid.find(async (player) => {
  //       if (player.name.includes(name)) {
  //       }
  //     });
  //     return;
  //   }
}
