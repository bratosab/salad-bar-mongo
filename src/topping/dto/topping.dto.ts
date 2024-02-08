class BaseToppingDTO {
  name: string;
  price: number;
}

export class CreateToppingDto extends BaseToppingDTO {}

export class UpdateToppingDto extends BaseToppingDTO {}

export class ToppingDTO extends BaseToppingDTO {
  _id: string;
}
