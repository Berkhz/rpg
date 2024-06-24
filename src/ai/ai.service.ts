import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const { GoogleGenerativeAI } = require('@google/generative-ai');

@Injectable()
export class AiService {
    private genAI;
    private readonly model;

    constructor(private configService: ConfigService) {
        const apiKey = this.configService.get<string>('GOOGLE_API_KEY');
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });
    }

    async generateBackground(character: any): Promise<string> {
        const prompt = `Crie um background para o seguinte personagem de RPG do universo de D&D: ${JSON.stringify(character)}`;
        const result = await this.model.generateContent(prompt);
        const response = result.response;
        const background = response.text();
        return background;
    }

    async generateAdventure(characters: any[]): Promise<string> {
        const prompt = `Crie uma aventura para os seguintes personagens de RPG do universo de D&D: ${JSON.stringify(characters)}`;
        const result = await this.model.generateContent(prompt);
        const response = result.response;
        const adventure = response.text();
        return adventure;
    }
}
