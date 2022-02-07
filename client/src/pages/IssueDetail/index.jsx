import React from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import IssueDetailTop from './IssueDetailTop';
import GreyLine from '@/components/GreyLine';
import IssueDetailMain from './IssueDetailMain';

import { defaultPageFrame } from '@/static/style/mixin';

function IssueDetail() {
  return (
    <IssueDetailContainer>
      <Header />
      <IssueDetailTop />
      <GreyLine />
      <IssueDetailMain />
    </IssueDetailContainer>
  );
}

export default IssueDetail;

const IssueDetailContainer = styled.div`
  ${defaultPageFrame}
`;
