import React from 'react';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import MileStoneContent from './MileStoneContent';
import MileStoneTop from './MileStoneTop';

import { defaultPageFrame } from '@/static/style/mixin';

function MileStone() {
  return (
    <MileStoneContainer>
      <Header />
      <MileStoneTop />
      <MileStoneContent />
    </MileStoneContainer>
  );
}

export default MileStone;

const MileStoneContainer = styled.div`
  ${defaultPageFrame}
`;
