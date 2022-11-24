import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaladModule } from './salad/salad.module';
import { ToppingModule } from './topping/topping.module';
import { DressingModule } from './dressing/dressing.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    SaladModule,
    ToppingModule,
    DressingModule,
    RouterModule.register([
      {
        path: 'salad',
        module: SaladModule,
      },
      {
        path: 'toppings',
        module: ToppingModule,
      },
      {
        path: 'dressings',
        module: DressingModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
