import { IsNumber, IsString } from "class-validator";

export class UserFilterDto {
  @IsNumber()
  page: number;

  @IsNumber()
  size: number;

  @IsString()
  name: string;
}
