import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema()
export class Character {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  class: string;

  @Prop({ required: true })
  level: number;

  @Prop({
    type: Object,
    required: true,
    default: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
  })
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  @Prop({ type: [Object], default: [] })
  feats: { name: string; description: string }[];

  @Prop({ required: true })
  alignment: string;

  @Prop({ type: [Object], default: [] })
  talents: { name: string; description: string }[];

  @Prop({ type: [Object], default: [] })
  spells: { name: string; level: number }[];

  @Prop({ type: [Object], default: [] })
  items: { name: string; description: string }[];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);