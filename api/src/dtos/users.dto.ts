import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;
}
