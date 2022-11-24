import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SaladDocument = HydratedDocument<Salad>;

@Schema()
export class Salad {
  @Prop()
  username: string;

  @Prop()
  dressing: string;

  @Prop([String])
  toppings: string[];

  @Prop()
  price: number;
}

export const SaladSchema = SchemaFactory.createForClass(Salad);
