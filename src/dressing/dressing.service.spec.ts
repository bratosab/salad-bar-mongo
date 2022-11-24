import { Test, TestingModule } from '@nestjs/testing';
import { DressingService } from './dressing.service';

describe('DressingService', () => {
  let service: DressingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DressingService],
    }).compile();

    service = module.get<DressingService>(DressingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
