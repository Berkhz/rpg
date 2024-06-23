import { IsString, IsNotEmpty, IsObject, IsArray, IsNumber, ValidateNested, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class AttributeDto {
  @IsNumber()
  @IsNotEmpty()
  strength: number;

  @IsNumber()
  @IsNotEmpty()
  dexterity: number;

  @IsNumber()
  @IsNotEmpty()
  constitution: number;

  @IsNumber()
  @IsNotEmpty()
  intelligence: number;

  @IsNumber()
  @IsNotEmpty()
  wisdom: number;

  @IsNumber()
  @IsNotEmpty()
  charisma: number;
}

class FeatDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}

class TalentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}

class SpellDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  level: number;
}

class ItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;
}

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @IsNumber()
  @IsNotEmpty()
  level: number;

  @IsObject()
  @ValidateNested()
  @Type(() => AttributeDto)
  @IsNotEmpty()
  attributes: AttributeDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FeatDto)
  feats: FeatDto[];

  @IsString()
  @IsNotEmpty()
  alignment: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TalentDto)
  talents: TalentDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpellDto)
  spells: SpellDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}