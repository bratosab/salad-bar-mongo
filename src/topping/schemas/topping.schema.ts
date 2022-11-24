import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ToppingDocument = HydratedDocument<Topping>;

@Schema()
export class Topping {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const ToppingSchema = SchemaFactory.createForClass(Topping);
