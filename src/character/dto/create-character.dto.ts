import { IsString, IsNotEmpty, IsObject, IsArray } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @IsObject()
  @IsNotEmpty()
  attributes: object;

  @IsArray()
  feats: object[];

  @IsString()
  alignment: string;

  @IsArray()
  talents: object[];

  @IsArray()
  spells: object[];

  @IsArray()
  items: object[];
}
