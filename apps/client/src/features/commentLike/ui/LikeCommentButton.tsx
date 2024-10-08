import { Button } from '@/shared/ui/button';
import { TypographySmall } from '@/shared/ui/Typography';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { putLike } from '../api/putLike';
import { getToastParams } from '@/shared/utils/getToastParams';
import { useToast } from '@/shared/ui/use-toast';
import { deleteLike } from '../api/deleteLike';
import { useCommentsStore } from '@/features/comments/store/useCommentsStore';
import { IComment } from '@/features/comments/models';

interface LikeCommentButtonProps {
  commentId: number;
  likeCount: number;
  isLiked: boolean;
}

export function LikeCommentButton({ isLiked, commentId, likeCount }: LikeCommentButtonProps) {
  const [isActive, setIsActive] = useState(isLiked);
  const {toast} = useToast();
  const updateComment = useCommentsStore((state) => state.updateComment);

  useEffect(() => {
    setIsActive(isLiked)
  }, [isLiked])

  const onClick = async () => {
    if (!isActive) {
      await putLike(commentId).catch((e) => {
        toast(getToastParams(e.response.errors[0].message));
      });
      // setIsActive(true);
      updateComment(commentId, (comment: IComment) => {
        if (comment.dislikeCount) {
          return {
            dislikeCount: comment.dislikeCount - 1,
            likeCount: comment.likeCount + 1,
            userDisliked: false,
            userLiked: true,
          } 
        } else {
          return {
            likeCount: comment.likeCount + 1,
            userLiked: true,
          }
        }
      });
    } else {
      await deleteLike(commentId);
      // setIsActive(false);
      updateComment(commentId, (comment: IComment) => ({
        likeCount: comment.likeCount - 1,
        userLiked: false
      }));
    }
  };

  return (
    <Button
      className="space-x-1"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={onClick}
    >
      <TypographySmall>{likeCount}</TypographySmall>
      <Heart width={16} />
    </Button>
  );
}
