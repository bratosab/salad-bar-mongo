import { Test, TestingModule } from '@nestjs/testing';
import { DressingController } from './dressing.controller';

describe('DressingController', () => {
  let controller: DressingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DressingController],
    }).compile();

    controller = module.get<DressingController>(DressingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
