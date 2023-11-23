import { Test, TestingModule } from '@nestjs/testing';
import { DistributersService } from './distributers.service';

describe('DistributersService', () => {
  let service: DistributersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistributersService],
    }).compile();

    service = module.get<DistributersService>(DistributersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
