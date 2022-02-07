import React from 'react';
import styled from '@emotion/styled';

import ProfileImage from '@/components/ProfileImage';
import WritingComment from '@/components/WritingComment';
import IssueOptionContainer from '@/components/IssueOptionContainer';
import Comment from '../Comment';
import Loader from '@/components/Loader';

import { useUserImageQuery } from '@/hooks/querys/useUser';
import { useCommentQuery } from '@/hooks/querys/useComment';
import { getRouterParams } from '@/utils/helper';

function IssueDetailMain() {
  const refreshState = () => {};
  const issueId = getRouterParams();
  const [comments, isLoading] = useCommentQuery(issueId);
  const userImage = useUserImageQuery();

  if (isLoading) return <Loader />;

  return (
    <IssueDetailMainContainer>
      <CommentContainer>
        {comments?.map((comment) => (
          <Comment info={comment} />
        ))}

        <WritingPart>
          <ProfileImage imageSrc={userImage} />
          <WritingComment refreshState={refreshState} />
        </WritingPart>
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
