import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ToDoModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
