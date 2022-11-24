import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DressingDocument = HydratedDocument<Dressing>;

@Schema()
export class Dressing {
  @Prop()
  name: string;
}

export const DressingSchema = SchemaFactory.createForClass(Dressing);
