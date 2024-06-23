import { IsString, IsObject, IsArray } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  name: string;

  @IsString()
  class: string;

  @IsObject()
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