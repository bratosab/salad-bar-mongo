import { Body, Controller, Get, Post } from '@nestjs/common';
import { DressingService } from './dressing.service';
import { CreateDressingDto } from './dto/dressing.dto';
import { Dressing } from './schemas/dressing.schema';

// base route set to "/dressings" in RouterModule in AppModule
@Controller()
export class DressingController {
  constructor(private readonly dressingService: DressingService) {}

  @Get()
  getAll(): Promise<Dressing[]> {
    return this.dressingService.findAll();
  }

  @Post()
  create(@Body() createDressingDto: CreateDressingDto) {
    return this.dressingService.create(createDressingDto);
  }
}
