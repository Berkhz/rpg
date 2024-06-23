import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    try {
      return this.characterService.create(createCharacterDto); 
    } catch (error) {
      throw new Error("Ocorreu um erro ao criar um personagem: " + error);
    }
  }

  @Get()
  findAll() {
    try {
      return this.characterService.findAll(); 
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todos os personagens: " + error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.characterService.findOne(id);
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar um personagem: " + error);
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    try {
      return this.characterService.update(id, updateCharacterDto);
    } catch (error) {
      throw new Error("Ocorreu um erro ao editar um personagem: " + error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.characterService.remove(id);
    } catch (error) {
      throw new Error("Ocorreu um erro ao excluir um personagem: " + error);
    }
  }
}
