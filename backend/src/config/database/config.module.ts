import { Module } from '@nestjs/common';
import { MariaConfigService } from './config.service';

@Module({
  providers: [MariaConfigService],
})
export class MariaConfigModule {}
