import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CharacterDocument = Character & Document;

@Schema()
export class Character {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  class: string;

  @Prop({ type: Object, required: true })
  attributes: object;

  @Prop({ type: [Object], default: [] })
  feats: object[];

  @Prop({ required: true })
  alignment: string;

  @Prop({ type: [Object], default: [] })
  talents: object[];

  @Prop({ type: [Object], default: [] })
  spells: object[];

  @Prop({ type: [Object], default: [] })
  items: object[];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
