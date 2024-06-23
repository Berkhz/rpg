import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character, CharacterDocument } from './schema/character.schema';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<CharacterDocument>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const createdCharacter = new this.characterModel(createCharacterDto);
    return createdCharacter.save();
  }

  async findAll(): Promise<Character[]> {
    return this.characterModel.find().exec();
  }

  async findOne(id: string): Promise<Character> {
    return this.characterModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    return this.characterModel
      .findByIdAndUpdate(id, updateCharacterDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Character> {
    return this.characterModel.findByIdAndDelete(id).exec();
  }

  async createRandomCharacter(level: number): Promise<Character> {
    const classes = ['Warrior', 'Mage', 'Cleric'];
    const alignments = ['Lawful Good', 'Neutral', 'Chaotic Evil'];

    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomAlignment =
      alignments[Math.floor(Math.random() * alignments.length)];

    const createCharacterDto: CreateCharacterDto = {
      name: `Random ${randomClass}`,
      class: randomClass,
      attributes: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
      feats: [],
      alignment: randomAlignment,
      talents: [],
      spells: randomClass === 'Mage' ? [{ name: 'Magic Missile' }] : [],
      items: [],
    };

    return this.create(createCharacterDto);
  }
}
