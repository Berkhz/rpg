import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new Error("Erro ao criar usuário! " + error)
    }
  }

  @Get()
  findAll() {
    try {
      return this.userService.findAll()
      ? this.userService.findAll()
      : 'Lista vazia';
    } catch (error) {
      throw new Error("Erro ao buscar usuários! " + error)
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.userService.findOne(id);
    } catch (error) {
      throw new Error("Erro ao buscar usuário! " + error)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.userService.update(id, updateUserDto);
    } catch (error) {
      throw new Error("Erro ao editar usuário! " + error)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.userService.remove(id);
    } catch (error) {
      throw new Error("Erro ao excluir usuário! " + error)
    }
  }
}
