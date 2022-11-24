import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Topping, ToppingSchema } from './schemas/topping.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }]),
  ],
  providers: [ToppingService],
  controllers: [ToppingController],
})
export class ToppingModule {}
