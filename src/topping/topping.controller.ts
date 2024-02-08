import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import { CreateToppingDto, UpdateToppingDto } from './dto/topping.dto';
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
    const newTopping = this.toppingService.create(createToppingDto);
    this.toppingService.emitToppingsList();

    return newTopping;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateToppingDto: UpdateToppingDto) {
    return this.toppingService.updateById(id, updateToppingDto);
  }

  @Post(':id/image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploadedFiles/',
        filename: (req, file, cb) => {
          cb(null, `${file.fieldname}-${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log('here');
    return {
      path: file.path,
      filename: file.originalname,
      mimetype: file.mimetype,
    };

  }
}
