import React from 'react';
import styled from '@emotion/styled';

import PreParation from '@/components/Preparation';

function MileStoneContent() {
  return (
    <MileStoneContentContainer>
      <PreParation />
    </MileStoneContentContainer>
  );
}

export default MileStoneContent;

const MileStoneContentContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
`;
