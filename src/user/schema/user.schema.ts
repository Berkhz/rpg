/*Crie uma entidade de usuário, e crie um sistema de cadastro e autenticação via JWT 
(crie todos os métodos de CRUD para o usuário, a senha do usuário deve ser criptografada) */


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
