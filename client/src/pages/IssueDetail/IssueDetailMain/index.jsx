import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

import ProfileImage from '@/components/ProfileImage';
import WritingComment from '@/components/WritingComment';
import IssueOptionContainer from '@/components/IssueOptionContainer';
import Comment from '../Comment';
import Loader from '@/components/Loader';
import CustomButton from '@/components/CustomButton';

import { useUserImageQuery } from '@/hooks/querys/useUser';
import { useCommentQuery } from '@/hooks/querys/useComment';
import { getRouterParams } from '@/utils/helper';
import { PLUS_WHITE } from '@/static/constants/image-path';
import { POST } from '@/api/base';
import { toastAtom } from '@/store/toastState';

const disableOpacity = 0.5;
const enableOpacity = 1;

function IssueDetailMain() {
  const theme = useTheme();
  const issueId = getRouterParams();
  const [comments, isLoading] = useCommentQuery(issueId);
  const userImage = useUserImageQuery();
  const [commentText, setCommentText] = useState('');
  const [opacity, setOpacity] = useState(disableOpacity);
  const postMutation = useMutation((body) => POST('/comment', body));
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastAtom);

  useEffect(() => {
    commentText ? setOpacity(enableOpacity) : setOpacity(disableOpacity);
  }, [commentText]);

  const refreshState = (_, { content }) => setCommentText(content);
  const handleClickCommentButtonBtn = async () => {
    const body = { issueId, content: commentText };
    const result = await postMutation.mutateAsync(body);

    if (!result.data.success) {
      setToast({
        isActive: true,
        title: result.data.message,
        mode: 'fail',
      });
      return;
    }

    setToast({
      isActive: true,
      title: '코멘트를 생성하였습니다.',
      mode: 'success',
    });

    queryClient.invalidateQueries('COMMENT');
    setCommentText('');
  };

  if (isLoading) return <Loader />;

  return (
    <IssueDetailMainContainer theme={theme}>
      <CommentContainer>
        {comments?.map((comment) => (
          <Comment info={comment} />
        ))}

        <WritingPart>
          <ProfileImage imageSrc={userImage} />
          <WritingComment refreshState={refreshState} value={commentText} />
        </WritingPart>
        <CommentButtonContainer>
          <CommentButton
            onClick={handleClickCommentButtonBtn}
            sizeLevel={1}
            bgColor={theme.colors.blue}
            opacity={opacity}
          >
            <img src={PLUS_WHITE} alt="이슈 작성 아이콘" />
            코멘트 작성
          </CommentButton>
        </CommentButtonContainer>
      </CommentContainer>

      <IssueOptionContainer />
    </IssueDetailMainContainer>
  );
}

export default IssueDetailMain;

const IssueDetailMainContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WritingPart = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CommentButton = styled(CustomButton)`
  width: 130px;
`;
