import { Module } from '@nestjs/common';
import { CharacterService } from './character/character.service';
import { CharacterController } from './character/character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Character } from './character/entities/character.entity';
import { CharacterSchema, CharacterDocument } from './character/schema/character.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]), 
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]) 
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
