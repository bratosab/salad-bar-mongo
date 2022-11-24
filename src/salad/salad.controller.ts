import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
