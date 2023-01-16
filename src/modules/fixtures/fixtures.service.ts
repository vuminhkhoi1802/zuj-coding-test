import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import {
  getDataByLiveScore,
  liveScoreUrlBuilder,
} from '../providers/liveScore/fixture';
import { Repository } from 'typeorm';
import { GetFixtureDto } from './dto/fixtures.dto';
import { Fixtures } from './entity/fixtures.entity';
import { FixtureResponse } from '../../types/fixture';

@Injectable()
export class FixturesService {
  constructor(
    @InjectRepository(Fixtures) private fixtures: Repository<Fixtures>,
  ) {}

  fixtureResponseBuilder(record): FixtureResponse {
    return {
      fixtureDate: record.date,
      matchTime: record.time,
      competitionId: record.competition.id,
      competitionName: record.competition.name,
      location: record.locatio,
      homeTeam: {
        name: record.home_name,
        id: record.home_id,
      },
      awayTeam: {
        name: record.away_name,
        id: record.away_id,
      },
    };
  }

  async getFixtures(params: GetFixtureDto): Promise<FixtureResponse[]> {
    const queryUrl = liveScoreUrlBuilder(params);
    const inputDate = moment(params.date).format('YYYY-MM-DD').toString();
    const existingData = await this.fixtures.findOne({
      where: {
        fixture_date: inputDate,
        url: queryUrl,
      },
    });
    if (existingData) {
      const data = JSON.parse(existingData.raw_json_data);
      return data.map((record) => {
        return this.fixtureResponseBuilder(record);
      });
    }

    const result = await getDataByLiveScore(params);

    if (result.data.fixtures.length) {
      await this.fixtures.save({
        url: queryUrl,
        raw_json_data: JSON.stringify(result.data.fixtures),
        fixture_date:
          params.date && moment(params.date).isValid()
            ? moment(params.date).format('YYYY-MM-DD')
            : moment().format('YYYY-MM-DD'),
      });
    }
    return result.data.fixtures.map((record) => {
      return this.fixtureResponseBuilder(record);
    });
  }
}
