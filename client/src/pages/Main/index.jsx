import React from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import MainTop from './MainTop';
import MainContent from './MainContent';
import IssuePagination from './IssuePagination';

import { defaultPageFrame } from '@/static/style/mixin';

function Main() {
  return (
    <MainContainer>
      <Header />
      <MainTop />
      <MainContent />
      <IssuePagination />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  ${defaultPageFrame}
`;
