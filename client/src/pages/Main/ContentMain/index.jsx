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

  if (Issues?.length === 0) return <Empty />;

  return (
    <ContentMainContainer>
      {Issues?.map((info) => (
        <Issue key={info.issue._id} info={info} />
      ))}
      {isLoading && <Loader />}
    </ContentMainContainer>
  );
}

export default ContentMain;

const ContentMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 700px;
`;
