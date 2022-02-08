import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import Issue from '../Issue';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';

import { useIssueQuery } from '@/hooks/querys/useIssue';
import { paramGetIssueAtom } from '@/store/getIssueParamState';

function ContentMain() {
  const paramGetIssue = useRecoilValue(paramGetIssueAtom);
  const [Issues, isLoading] = useIssueQuery(paramGetIssue);

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  if (Issues?.length === 0) return <Empty />;

  return (
    <ContentMainContainer>
      {Issues.map((info) => (
        <Issue key={info.issue._id} info={info} />
      ))}
    </ContentMainContainer>
  );
}

export default ContentMain;

const ContentMainContainer = styled.div``;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
