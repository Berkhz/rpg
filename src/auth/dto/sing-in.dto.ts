import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserSinginDto {
    @IsEmail()
    @ApiProperty({ example: 'matheustosros@gmail.com' })
    username: string;

    @IsString()
    @ApiProperty({ example: 'senhaRpg123' })
    password: string;
}