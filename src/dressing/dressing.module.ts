import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DressingController } from './dressing.controller';
import { DressingService } from './dressing.service';
import { Dressing, DressingSchema } from './schemas/dressing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Dressing.name, schema: DressingSchema },
    ]),
  ],
  controllers: [DressingController],
  providers: [DressingService],
})
export class DressingModule {}
