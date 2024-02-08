import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ToppingDTO } from 'src/topping/dto/topping.dto';
import { CreateSaladDto } from './dto/salad.dto';
import { SaladService } from './salad.service';
import { Salad } from './schemas/salad.schema';

// base route set to "/salad" in RouterModule in AppModule
@Controller()
export class SaladController {
  constructor(private readonly saladService: SaladService) {}

  @Get()
  getAll(): Promise<Salad[]> {
    return this.saladService.findAll();
  }

  @Post()
  create(@Body() createSaladDto: CreateSaladDto) {
    return this.saladService.create(createSaladDto);
  }

  @Post(':id/toppings')
  addToppings(@Param('id') saladId: string, @Body() toppings: ToppingDTO[]) {
    return this.saladService.addToppings(saladId, toppings);
  }
}
