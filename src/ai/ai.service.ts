import { Injectable } from '@nestjs/common';
const { GoogleGenerativeAI } = require('@google/generative-ai');

@Injectable()
export class AiService {
    private genAI;
    private model;

    constructor() {
        this.genAI = new GoogleGenerativeAI('AIzaSyAZ6AR8vwxKC3b2gT0XaVbl7zxOfd8rxeI');
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });
    }

    async generateBackground(character: any): Promise<string> {
        const prompt = `Crie um background para o seguinte personagem de RPG do universo de D&D: ${JSON.stringify(character)}`;
        const response = await this.model.generate({
            messages: [
                { role: 'system', content: 'Você é um criador de histórias' },
                { role: 'user', content: prompt },
            ],
            max_tokens: 150,
        });
        return response.choices[0].message.content;
    }

    async generateAdventure(characters: any[]): Promise<string> {
        const prompt = `Crie uma aventura para os seguintes personagens: ${JSON.stringify(characters)}`;
        const response = await this.model.generate({
            messages: [
                { role: 'system', content: 'Você é um criador de histórias' },
                { role: 'user', content: prompt },
            ],
            max_tokens: 300,
        });
        return response.choices[0].message.content;
    }
}