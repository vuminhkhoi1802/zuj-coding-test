import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetFixtureDto } from './dto/fixtures.dto';
import { FixturesService } from './fixtures.service';

@Controller('fixtures')
@ApiTags('Fixtures')
export class FixturesController {
  constructor(private readonly fixtureService: FixturesService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiQuery({
    name: 'date',
    required: false,
    example: '2023-01-01',
    type: String,
  })
  @ApiQuery({
    name: 'competition_id',
    required: false,
    example: 313,
    type: Number,
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    example: 'en',
    type: String,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    example: 1,
    type: Number,
  })
  @ApiQuery({
    name: 'round',
    required: false,
    example: 'R16',
    type: String || Number,
  })
  @ApiQuery({
    name: 'team',
    required: false,
    example: 19,
    type: Number,
  })
  @ApiOkResponse({
    description: 'Get Scheduled Fixtures successfully',
    isArray: true,
  })
  @Get()
  async getDataLiveScore(@Query() params: GetFixtureDto) {
    return this.fixtureService.getFixtures(params);
  }
}
