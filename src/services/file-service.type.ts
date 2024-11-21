export type FileService = {
  readFile(fileName: string): Promise<string>;
  writeFile(fileName: string, data: string): Promise<void>;
};
