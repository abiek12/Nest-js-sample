import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UserFilterDto {
  @IsOptional()
  @IsNumber()
  page: number;

  @IsOptional()
  @IsNumber()
  size: number;

  @IsOptional()
  @IsString()
  name: string;
}
