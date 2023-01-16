import { Test, TestingModule } from '@nestjs/testing';
import { GetFixtureDto } from './dto/fixtures.dto';
import { FixturesService } from './fixtures.service';
import { FixturesController } from './fixtures.controller';

describe('FixtureController', () => {
  let controller: FixturesController;
  const mockService = {
    getFixtures: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FixturesController],
      providers: [FixturesService],
    })
      .overrideProvider(FixturesService)
      .useValue(mockService)
      .compile();

    controller = module.get<FixturesController>(FixturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Function: Get', () => {
    it('[Success-Expect] Should get live score successfully', async () => {
      const mockGetLiveScore = {
        team: 19,
        round: 'R16',
        page: 1,
        lang: 'fa',
        date: 'today',
        competition_id: 313,
      } as any as GetFixtureDto;

      mockService.getFixtures.mockResolvedValueOnce({
        success: true,
      });

      const result = await controller.getDataLiveScore(mockGetLiveScore);
      expect(result).toBeDefined();
    });
  });
});
