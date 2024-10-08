import { LoaderCircle } from 'lucide-react';
import { ReactNode } from 'react';

export function LoadingSpinner({ children }: { children?: ReactNode }) {
  return (
    <div className="flex w-full flex-col space-y-4 justify-center items-center">
      <LoaderCircle className="min-h-max animate-spin" size={100} />
      {children}
    </div>
  );
}
