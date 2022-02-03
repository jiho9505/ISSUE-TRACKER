import React from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import MainTop from './MainTop';

import { defaultPageFrame } from '@/static/style/mixin';
import MainContent from './MainContent';

function Main() {
  return (
    <MainContainer>
      <Header />
      <MainTop />
      <MainContent />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  ${defaultPageFrame}
`;
