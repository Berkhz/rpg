import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) {}

    @Post('generate-background')
    async generateBackground(@Body() character: any) {
        return this.aiService.generateBackground(character);
    }

    @Post('generate-adventure')
    async generateAdventure(@Body() characters: any[]) {
        return this.aiService.generateAdventure(characters);
    }
}
