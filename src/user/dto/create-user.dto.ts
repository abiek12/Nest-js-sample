import { IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Min(3)
  @Max(20)
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Min(5)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Max(12)
  phone: string;

  @IsOptional()
  @IsString()
  gender: string;
}
