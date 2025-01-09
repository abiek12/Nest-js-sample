import { IsNotEmpty, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 12)
  phone: string;

  @IsOptional()
  @IsString()
  gender: string;
}
