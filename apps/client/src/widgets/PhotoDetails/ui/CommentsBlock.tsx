import { CommentList } from './CommentList';
import { LoadingSpinner } from '@/shared/components/Loader';
import { CommentForm } from './CommentForm';
import { useCommentsStore } from '../store/useCommentsStore';

export function CommentsBlock() {
  const loading = useCommentsStore((store) => store.loading);
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <CommentList />
      <CommentForm />
    </>
  );
}
