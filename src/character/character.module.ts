import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Character } from './entities/character.entity';
import { CharacterSchema } from './schema/character.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]), 
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]) 
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}