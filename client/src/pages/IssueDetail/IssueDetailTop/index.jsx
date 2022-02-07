import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import TitleEditorButton from '../TitleEditorButton';
import IssueToggleButton from '../IssueToggleButton';
import PageTitle from '../PageTitle';
import CustomButton from '@/components/CustomButton';
import Loader from '@/components/Loader';

import { seroCenterAlign } from '@/static/style/mixin';
import { EXCLAMATION_MARK_BLUE, BOX_BLUE } from '@/static/constants/image-path';
import { getTimeMadeIssue, getRouterParams } from '@/utils/helper';
import { useIssueDetailQuery } from '@/hooks/querys/useIssue';
import { useCommentQuery } from '@/hooks/querys/useComment';

function IssueDetailTop() {
  const theme = useTheme();
  const issueId = getRouterParams();
  const [issueDetail, isLoading] = useIssueDetailQuery(issueId);
  const [comments] = useCommentQuery(issueId);

  if (isLoading) return <Loader />;

  const createIssueStatus = () => {
    return issueDetail && issueDetail.isOpen ? (
      <IssueStatusOpenButton sizeLevel={1}>
        <img src={EXCLAMATION_MARK_BLUE} />
        <span>열린 이슈</span>
      </IssueStatusOpenButton>
    ) : (
      <IssueStatusCloseButton sizeLevel={1}>
        <img src={BOX_BLUE} />
        <span>닫힌 이슈</span>
      </IssueStatusCloseButton>
    );
  };

  return (
    <IssueDetailTopContainer theme={theme}>
      <UpPart>
        <PageTitle info={issueDetail?.title} />
        <ButtonContainer>
          <TitleEditorButton />
          <IssueToggleButton />
        </ButtonContainer>
      </UpPart>
      <DownPart>
        {createIssueStatus()}
        <IssueRecord>
          이 이슈는 {issueDetail && getTimeMadeIssue(issueDetail?.createdAt)},
          {issueDetail?.writerName}님에 의해 작성되었습니다 ∙ 코멘트 {comments?.length}개
        </IssueRecord>
      </DownPart>
    </IssueDetailTopContainer>
  );
}

export default IssueDetailTop;

const IssueDetailTopContainer = styled.div``;

const UpPart = styled.div`
  ${seroCenterAlign}
  justify-content: space-between;
  margin-top: 60px;
`;

const ButtonContainer = styled.div`
  ${seroCenterAlign}
  gap: 10px;
`;

const DownPart = styled.div`
  margin-top: 20px;
  ${seroCenterAlign}
  gap: 10px;
`;

const IssueRecord = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

const IssueStatusOpenButton = styled(CustomButton)`
  cursor: default;
  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.lightBlue};

  span {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const IssueStatusCloseButton = styled(CustomButton)`
  cursor: default;
  border: 1px solid ${(props) => props.theme.colors.purple};
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.lightPurple};

  span {
    color: ${(props) => props.theme.colors.purple};
  }
`;
