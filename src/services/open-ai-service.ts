import type { AIService } from './ai-service.type';
import type { AIClientService } from './ai-client-service.type';
import type OpenAI from 'openai';

export class OpenAIService implements AIService {
  constructor(private aiClientService: AIClientService<OpenAI>) {}
  async getChatCompletionContent(prompt: string) {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [
        {
          role: 'assistant',
          content: prompt,
        },
      ],
      model: 'gpt-4o',
      stream: false,
    };

    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await this.aiClientService.getClient().chat.completions.create(params);

    return chatCompletion.choices[0].message.content;
  }
}
