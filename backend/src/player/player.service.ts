import { Injectable } from '@nestjs/common';
import { Player } from './entities.ts/player.entitity';
import players from '../json/spid.json';
import { HttpService } from '@nestjs/axios';

async function findPlayer<T>(
  players: Player[],
  name: string,
): Promise<Player[]> {
  let arr: Player[] = new Array();
  players.find((player) => {
    if (player.name.includes(name)) {
      arr.push(player);
    }
  });
  return arr;
}

@Injectable()
export class PlayerService {
  constructor(private readonly httpService: HttpService) {}
  private players: Player[] = players;

  getPlayers(skip: number, take: number): Player[] {
    return this.players.slice(skip, take);
  }

  async getPlayer(name: string): Promise<Player> {
    const header = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNTUzNjU2MzQyIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY1NjkyODE0OSwiZXhwIjoxNjcyNDgwMTQ5LCJpYXQiOjE2NTY5MjgxNDl9.Pd13AbrTwhdMgGgJMBnyp8ZuMlIlKP-GDL9Dw8l2bYk',
    };
    const res: Player[] = await findPlayer<Player[]>(this.players, name);
    for (let i = 0; i < res.length; i++) {}
    const result = await this.httpService
      .post(
        `https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${res[0].id}.png`,
        { header: header, responseType: 'stream' },
      )
      .subscribe();
    console.log(result);
    return { id: 11, name: 'test' };
  }
}
