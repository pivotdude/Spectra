export interface IFile extends File {
  webkitRelativePath: string;
}

export interface IUploadedFile extends IFile {
  url(url: any): unknown;
  id: number;
  status: 'loading' | 'success' | 'error';
  result?: IFileResult;
  error?: string;
}

interface IFileResult {
  id: number;
  name: string;
  mimeType: string;
  size: number;
  url: string;
  createdAt: string;
  updatedAt: string;
}
