import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaladDto } from './dto/salad.dto';
import { Salad, SaladDocument } from './schemas/salad.schema';

@Injectable()
export class SaladService {
  constructor(
    @InjectModel(Salad.name) private saladModel: Model<SaladDocument>,
  ) {}

  async create(createSaladDto: CreateSaladDto): Promise<Salad> {
    const createdSalad = new this.saladModel(createSaladDto);
    return createdSalad.save();
  }

  async findAll(): Promise<Salad[]> {
    return this.saladModel.find().exec();
  }
}
