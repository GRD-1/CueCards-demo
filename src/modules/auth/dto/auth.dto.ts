import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({ description: 'login', nullable: true })
  @IsString()
    login: string;

  @ApiProperty({ description: 'password', nullable: true })
  @IsString()
    password: string;
}