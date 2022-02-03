import React from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';

import { defaultPageFrame } from '@/static/style/mixin';
import Title from './Title';

function IssueWrite() {
  return (
    <IssueWriteContainer>
      <Header />
      <Title />
    </IssueWriteContainer>
  );
}

export default IssueWrite;

const IssueWriteContainer = styled.div`
  ${defaultPageFrame}
`;
