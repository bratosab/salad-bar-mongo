import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Topping, ToppingSchema } from './schemas/topping.schema';
import { ToppingsGateway } from './toppings.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }]),
  ],
  providers: [ToppingService, ToppingsGateway],
  controllers: [ToppingController],
  exports: [ToppingService],
})
export class ToppingModule {}
