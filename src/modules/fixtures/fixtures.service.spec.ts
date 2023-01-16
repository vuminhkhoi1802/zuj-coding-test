import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Fixtures } from './entity/fixtures.entity';
import { GetFixtureDto } from './dto/fixtures.dto';
import { FixturesService } from './fixtures.service';

describe('FixturesService', () => {
  let service: FixturesService;

  const mockModel = {
    findOne: jest.fn(),
    save: jest.fn(),
  };
  const mockFixtureService = {
    getFixtures: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FixturesService,
        {
          provide: getRepositoryToken(Fixtures),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<FixturesService>(FixturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('Function: GET', () => {
    it('[Success-Expect] Should Get Mock live score successfully', async () => {
      const mockGetLiveScore = {
        team: 19,
        round: 'R16',
        page: 1,
        lang: 'fa',
        date: '2023-01-13',
        competition_id: 313,
      } as any as GetFixtureDto;
      mockModel.findOne.mockResolvedValueOnce({ raw_json_data: '[]' });
      mockModel.save.mockResolvedValueOnce({});
      mockFixtureService.getFixtures.mockResolvedValueOnce({});
      const result = await service.getFixtures(mockGetLiveScore);
      expect(result).toBeDefined();
    });
  });
});
