import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ToDoModule } from './to-do/to-do.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ToDoModule,
    AuthModule,
    TestModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
