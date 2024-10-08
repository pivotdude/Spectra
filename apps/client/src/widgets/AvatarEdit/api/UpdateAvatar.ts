import { IGraphqlError, sendRequest } from '@/shared/utils/graphql/sendRequest';
import gql from 'graphql-tag';

export interface UpdateAvatarResponse {
  updateUser: {
    id: number;
  };
  errors?: IGraphqlError[];
}

export const updateAvatar = async (
  avatarId: number,
): Promise<UpdateAvatarResponse> => {
  const query = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
      updateUser(input: $input) {
        id
      }
    }
  `;
  return sendRequest<UpdateAvatarResponse>(query, { input: { avatarId } });
};
