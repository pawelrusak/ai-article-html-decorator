import OpenAI from 'openai';

import type { AIClientService } from './ai-client-service.type';

export class OpenAIClientService implements AIClientService<OpenAI> {
  private client: OpenAI;

  constructor(private apiKey: string = process.env.OPENAI_API_KEY) {
    this.client = new OpenAI({
      apiKey: this.apiKey,
    });
  }

  getClient() {
    return this.client;
  }
}
