import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Topping } from 'src/topping/schemas/topping.schema';

export type SaladDocument = HydratedDocument<Salad>;

@Schema()
export class Salad {
  @Prop()
  username: string;

  @Prop()
  dressing: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }] })
  toppings: Topping[];

  // @Prop(
  //   raw([
  //     {
  //       name: { type: String },
  //       price: { type: Number },
  //     },
  //   ]),
  // )
  // toppings: Record<string, any>[];

  @Prop()
  price: number;
}

export const SaladSchema = SchemaFactory.createForClass(Salad);
