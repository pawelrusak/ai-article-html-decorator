export type AIService = {
  getChatCompletionContent(prompt: string): Promise<string>;
};
