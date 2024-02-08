import { ToppingDTO } from 'src/topping/dto/topping.dto';

export class BaseSaladDto {
  username: string;
  dressing: string;
  toppings: ToppingDTO[];
  price: number;
}

export class CreateSaladDto extends BaseSaladDto {}

export class UpdateSaladDto extends BaseSaladDto {}
