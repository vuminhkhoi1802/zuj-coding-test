import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { isValidDate } from '../../../validator/IsValidDate';

export class GetFixtureDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  competition_id: number;

  @IsOptional()
  @isValidDate()
  date: string;

  @IsOptional()
  lang: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsOptional()
  round: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  team: number;
}
