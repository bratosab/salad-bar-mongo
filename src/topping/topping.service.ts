import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateToppingDto } from './dto/topping.dto';
import { Topping, ToppingDocument } from './schemas/topping.schema';

@Injectable()
export class ToppingService {
  constructor(
    @InjectModel(Topping.name) private ToppingModel: Model<ToppingDocument>,
  ) {}

  async create(createToppingDto: CreateToppingDto): Promise<Topping> {
    const createdTopping = new this.ToppingModel(createToppingDto);
    return createdTopping.save();
  }

  async findAll(): Promise<Topping[]> {
    return this.ToppingModel.find().exec();
  }
}
