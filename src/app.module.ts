import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { AiModule } from './ai/ai.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    CharacterModule,
    UserModule,
    AiModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}