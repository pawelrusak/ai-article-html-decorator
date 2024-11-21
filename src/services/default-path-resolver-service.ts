import * as path from 'path';

import type { PathResolverService } from './path-resolver-service.type';

export class DefaultPathResolver implements PathResolverService {
  constructor(private basePath = process.cwd()) {}

  resolvePath(fileName: string): string {
    return path.join(this.basePath, fileName);
  }
}
