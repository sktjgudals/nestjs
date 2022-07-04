import { Injectable } from '@nestjs/common';
import { Player } from './entities.ts/player.entitity';
import players from '../json/spid.json';

@Injectable()
export class PlayerService {
  private players: Player[] = players;

  getPlayers(skip: number, take: number): Player[] {
    return this.players.slice(skip, take);
  }

  getPlayer(name: string): Player {
    players.find(async (player) => {
      if (player.name.includes(name)) {
      }
    });
    return;
  }
}
