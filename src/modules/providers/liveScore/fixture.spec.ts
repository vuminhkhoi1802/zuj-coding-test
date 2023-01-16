import { getDataByLiveScore, liveScoreUrlBuilder } from './fixture';
import { GetFixtureDto } from '../../fixtures/dto/fixtures.dto';
import { CONFIG } from '../../../../config';

describe('[LiveScore] API Testing', () => {
  it('should successfully return a generated LiveScore URL', () => {
    const testParams: GetFixtureDto = {
      competition_id: 12,
      date: '2023-01-01',
      lang: 'en',
      page: 1,
      round: 'R16',
      team: 12,
    };
    const generatedAPIUrl = liveScoreUrlBuilder(testParams);
    expect(generatedAPIUrl).toBeDefined();
    expect(generatedAPIUrl).toEqual(
      `${CONFIG.LIVE_SCORE_URL}?key=${CONFIG.API_KEY}&secret=${CONFIG.API_SECRET}&competition_id=12&date=2023-01-01&lang=en&page=1&round=R16&team=12`,
    );
  });
  it('should successfully fetch liveScore API Data', async () => {
    const testParams = {
      competition_id: 12,
      date: '2023-01-01',
      lang: 'en',
      page: 1,
      round: 'R16',
      team: 12,
    };
    const res = await getDataByLiveScore(testParams);
    expect(res.success).toEqual(true);
  });
});
