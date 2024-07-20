import { IFile } from '../model';

export function fileToObject(file: File): IFile {
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModified,
    webkitRelativePath:
      'webkitRelativePath' in file
        ? (file as any).webkitRelativePath
        : undefined,
  };
}
