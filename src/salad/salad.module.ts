import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaladController } from './salad.controller';
import { SaladService } from './salad.service';
import { Salad, SaladSchema } from './schemas/salad.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Salad.name, schema: SaladSchema }]),
  ],
  controllers: [SaladController],
  providers: [SaladService],
})
export class SaladModule {}
