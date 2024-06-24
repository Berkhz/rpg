import { Module } from '@nestjs/common';
import { AiService } from './ai.service'; // Importe o serviço AiService
import { AiController } from './ai.controller'; // Importe o controlador AiController

@Module({
    providers: [AiService],
    controllers: [AiController],
})
export class AiModule { }
