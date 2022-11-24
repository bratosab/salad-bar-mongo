import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateToppingDto } from './dto/topping.dto';
import { Topping } from './schemas/topping.schema';
import { ToppingService } from './topping.service';

// base route set to "/toppings" in RouterModule in AppModule
@Controller()
export class ToppingController {
  constructor(private readonly toppingService: ToppingService) {}

  @Get()
  getAll(): Promise<Topping[]> {
    return this.toppingService.findAll();
  }

  @Post()
  create(@Body() createToppingDto: CreateToppingDto) {
    return this.toppingService.create(createToppingDto);
  }
}
