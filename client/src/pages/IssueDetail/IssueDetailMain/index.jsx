import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

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

const disableOpacity = 0.5;
const enableOpacity = 1;

function IssueDetailMain() {
  const theme = useTheme();
  const issueId = getRouterParams();
  const [comments, isLoading] = useCommentQuery(issueId);
  const userImage = useUserImageQuery();
  const [commentText, setCommentText] = useState('');
  const [opacity, setOpacity] = useState(disableOpacity);
  const refreshState = (_, { content }) => setCommentText(content);

  useEffect(() => {
    commentText ? setOpacity(enableOpacity) : setOpacity(disableOpacity);
  }, [commentText]);

  if (isLoading) return <Loader />;

  return (
    <IssueDetailMainContainer theme={theme}>
      <CommentContainer>
        {comments?.map((comment) => (
          <Comment info={comment} />
        ))}

        <WritingPart>
          <ProfileImage imageSrc={userImage} />
          <WritingComment refreshState={refreshState} />
        </WritingPart>
        <CommentButtonContainer>
          <CommentButton
            // onClick={handleClickWritingIssueBtn}
            sizeLevel={1}
            bgColor={theme.colors.blue}
            opacity={opacity}
          >
            <img src={PLUS_WHITE} alt="이슈 작성 아이콘" />
            코멘트 작성
          </CommentButton>
        </CommentButtonContainer>
      </CommentContainer>

      <IssueOptionContainer refreshState={refreshState} />
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
