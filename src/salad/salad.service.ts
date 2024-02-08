import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToppingDTO } from 'src/topping/dto/topping.dto';
import { Topping } from 'src/topping/schemas/topping.schema';
import { ToppingService } from 'src/topping/topping.service';
import { CreateSaladDto, UpdateSaladDto } from './dto/salad.dto';
import { Salad, SaladDocument } from './schemas/salad.schema';

@Injectable()
export class SaladService {
  constructor(
    @InjectModel(Salad.name) private saladModel: Model<SaladDocument>,
    private toppingsService: ToppingService,
  ) {}

  async create(createSaladDto: CreateSaladDto): Promise<Salad> {
    const createdSalad = new this.saladModel(createSaladDto);
    return createdSalad.save();
  }

  async findAll(): Promise<Salad[]> {
    return this.saladModel.find().exec();
  }

  async findById(id: string): Promise<Salad> {
    return this.saladModel.findById(id).exec();
  }

  async updateById(
    id: string,
    updateSaladDto: UpdateSaladDto | Salad,
  ): Promise<Salad> {
    return this.saladModel.findByIdAndUpdate(id, updateSaladDto).exec();
  }

  async addToppings(saladId: string, toppings: ToppingDTO[]): Promise<Salad> {
    let saladToUpdate: Salad;
    try {
      saladToUpdate = await this.findById(saladId);
    } catch (error) {
      throw new HttpException('Salad not found', 404);
    }

    const toppingIds = toppings.reduce((ids, topping) => {
      ids.push(topping._id);
      return ids;
    }, []);

    let checkedToppings: Topping[];
    try {
      checkedToppings = await this.toppingsService.findByIds(toppingIds);
    } catch (error) {
      throw new HttpException('Topping not found', 404);
    }

    saladToUpdate.toppings = [...saladToUpdate.toppings, ...checkedToppings];
    return await this.updateById(saladId, saladToUpdate);
  }
}
