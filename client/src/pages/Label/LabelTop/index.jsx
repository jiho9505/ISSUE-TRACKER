import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import IssueOptionButtons from '@/components/IssueOptionButtons';
import CustomButton from '@/components/CustomButton';

import { PLUS_WHITE, CANCEL_BLUE } from '@/static/constants/image-path';

function LabelTop({ onClick, isActiveAddBtn }) {
  const theme = useTheme();
  const createButton = () => {
    if (isActiveAddBtn) {
      return (
        <CancelButton sizeLevel={1} onClick={onClick}>
          <img src={CANCEL_BLUE} alt="닫기" />
          <span>닫기</span>
        </CancelButton>
      );
    }

    return (
      <AdditionButton sizeLevel={1} onClick={onClick}>
        <img src={PLUS_WHITE} alt="추가" />
        추가
      </AdditionButton>
    );
  };
  return (
    <LabelTopContainer theme={theme}>
      <IssueOptionButtons choice="label" />
      {createButton()}
    </LabelTopContainer>
  );
}

export default LabelTop;

const LabelTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const AdditionButton = styled(CustomButton)``;

const CancelButton = styled(CustomButton)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  span {
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 4px;
  }
`;
