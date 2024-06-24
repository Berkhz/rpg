import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);

    if (!createUserDto) {
      throw new Error('Algo deu Errado ao criar um usuario');
    }
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();

    if (!users) {
      throw new Error('Algo deu erro nos serviços de Usuario...');
    }
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new Error('Algo deu erro nos serviços de Usuario...');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!user) {
      throw new Error('Algo deu erro nos serviços de Usuario...');
    }

    return user;
  }

  async remove(id: string): Promise<User> {
    if (!id) {
      throw new Error('Id não pode ser nulo');
    }
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async findByUsername(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }
}


