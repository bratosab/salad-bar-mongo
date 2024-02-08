import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject } from 'rxjs';
import { CreateToppingDto, UpdateToppingDto } from './dto/topping.dto';
import { Topping, ToppingDocument } from './schemas/topping.schema';

@Injectable()
export class ToppingService {
  constructor(
    @InjectModel(Topping.name) private toppingModel: Model<ToppingDocument>,
  ) {}

  public toppingsList$: Subject<Topping[]> = new Subject();

  async create(createToppingDto: CreateToppingDto): Promise<Topping> {
    const createdTopping = new this.toppingModel(createToppingDto);
    return createdTopping.save();
  }

  async findAll(): Promise<Topping[]> {
    return this.toppingModel.find().exec();
  }

  async findByIds(ids: string[]): Promise<Topping[]> {
    return this.toppingModel.find({ _id: { $in: ids } }).exec();
  }

  async updateById(
    id: string,
    updateToppingDto: UpdateToppingDto,
  ): Promise<Topping> {
    return this.toppingModel.findByIdAndUpdate(id, updateToppingDto).exec();
  }

  async emitToppingsList() {
    this.toppingsList$.next(await this.findAll());
  }
}
