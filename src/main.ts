import { DefaultFileService } from './services/default-file-service';
import { DefaultPathResolver } from './services/default-path-resolver-service';
import { OpenAIClientService } from './services/open-ai-client-service';
import { OpenAIService } from './services/open-ai-service';
import { createArticleHTML } from './core/createArticleHTML.facade';

const pathResolver = new DefaultPathResolver();
const fileService = new DefaultFileService(pathResolver);

const openAIClientService = new OpenAIClientService();
const openAIService = new OpenAIService(openAIClientService);

async function main() {
  await createArticleHTML(fileService, openAIService);
}

main();
