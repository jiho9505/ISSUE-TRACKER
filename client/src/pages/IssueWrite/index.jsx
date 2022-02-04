import React from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import GreyLine from '@/components/GreyLine';
import PageMain from './PageMain';

import { defaultPageFrame } from '@/static/style/mixin';

function IssueWrite() {
  return (
    <IssueWriteContainer>
      <Header />
      <PageTitle>새로운 이슈 작성</PageTitle>
      <GreyLine />
      <PageMain />
    </IssueWriteContainer>
  );
}

export default IssueWrite;

const IssueWriteContainer = styled.div`
  ${defaultPageFrame}
`;

const PageTitle = styled.h2`
  font-size: 2rem;
  margin-top: 60px;
`;
