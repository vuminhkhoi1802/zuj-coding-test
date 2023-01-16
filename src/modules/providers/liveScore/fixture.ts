import { GetFixtureDto } from 'src/modules/fixtures/dto/fixtures.dto';
import { CONFIG } from '../../../../config';
import { pick } from 'lodash';
import axios from 'axios';
import * as moment from 'moment';

const parametersList = [
  'competition_id',
  'date',
  'lang',
  'page',
  'round',
  'team',
];

export const getDataByLiveScore = async (params: GetFixtureDto) => {
  const url = liveScoreUrlBuilder(params);
  return await (
    await axios.get(url)
  ).data;
};

export const liveScoreUrlBuilder = (params: GetFixtureDto): string => {
  const paramExpect = pick(params, parametersList);

  if (paramExpect['date'] === 'today' || !paramExpect['date']) {
    paramExpect['date'] = moment(new Date()).format('YYYY-MM-DD');
  }

  if (!paramExpect['page']) paramExpect['page'] = 1;

  let url = `${CONFIG.LIVE_SCORE_URL}?key=${CONFIG.API_KEY}&secret=${CONFIG.API_SECRET}`;

  for (const property in paramExpect) {
    url += `&${property}=${paramExpect[property]}`;
  }
  return url;
};
