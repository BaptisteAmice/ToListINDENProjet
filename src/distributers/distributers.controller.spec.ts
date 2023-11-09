import { Test, TestingModule } from '@nestjs/testing';
import { DistributersController } from './distributers.controller';

describe('DistributersController', () => {
  let controller: DistributersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistributersController],
    }).compile();

    controller = module.get<DistributersController>(DistributersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
