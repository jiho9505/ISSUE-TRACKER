import React from 'react';
import styled from '@emotion/styled';

import IssueOptionButtons from '@/components/IssueOptionButtons';
import CustomButton from '@/components/CustomButton';

import { PLUS_WHITE } from '@/static/constants/image-path';

function MileStoneTop() {
  return (
    <MileStoneTopContainer>
      <IssueOptionButtons choice="milestone" />

      <CustomButton sizeLevel={1}>
        <img src={PLUS_WHITE} />
        추가
      </CustomButton>
    </MileStoneTopContainer>
  );
}

export default MileStoneTop;

const MileStoneTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
