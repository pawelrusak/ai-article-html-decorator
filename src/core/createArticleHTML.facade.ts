import { FileService } from '../services/file-service.type';
import { AIService } from '../services/ai-service.type';

import { getArticleHTMLDecoratorPrompt } from '../utils/prompts';

export async function createArticleHTML(
  fileService: FileService,
  aiService: AIService
) {
  console.info('[ INFO ] Reading artykul.txt file...');
  const article = await fileService.readFile('src/assets/artykul.txt');
  console.info('[ INFO ] Article read successfully!');

  const prompt = getArticleHTMLDecoratorPrompt(article);

  console.info('[ INFO ] Getting chat completion content...');
  const articleHTML = await aiService.getChatCompletionContent(prompt);
  console.info('[ INFO ] Chat completion content received!');

  console.info('[ INFO ] Writing artykul.html file...');
  await fileService.writeFile('/artykul.html', articleHTML);
  console.info('[ INFO ] artykul.html file written successfully!');

  console.log('\n');
  console.info('********************************************************');
  console.info('***                                                  ***');
  console.info('***   You can find artykul.html in root directory!   ***');
  console.info('***                                                  ***');
  console.info('********************************************************');
}
