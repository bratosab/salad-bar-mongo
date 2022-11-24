import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDressingDto } from './dto/dressing.dto';
import { Dressing, DressingDocument } from './schemas/dressing.schema';

@Injectable()
export class DressingService {
  constructor(
    @InjectModel(Dressing.name) private DressingModel: Model<DressingDocument>,
  ) {}

  async create(createDressingDto: CreateDressingDto): Promise<Dressing> {
    const createdDressing = new this.DressingModel(createDressingDto);
    return createdDressing.save();
  }

  async findAll(): Promise<Dressing[]> {
    return this.DressingModel.find().exec();
  }
}
