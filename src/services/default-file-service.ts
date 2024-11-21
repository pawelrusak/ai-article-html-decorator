import fs from 'fs/promises';

import type { PathResolverService } from './path-resolver-service.type';
import type { FileService } from './file-service.type';

export class DefaultFileService implements FileService {
  constructor(private pathResolverService: PathResolverService) {}

  async readFile(fileName: string): Promise<string> {
    const filePath = this.pathResolverService.resolvePath(fileName);

    return await fs.readFile(filePath, 'utf-8');
  }

  async writeFile(fileName: string, data: string): Promise<void> {
    const filePath = this.pathResolverService.resolvePath(fileName);

    return await fs.writeFile(filePath, data, 'utf-8');
  }
}
