import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { CANCEL } from '@/static/constants/image-path';

function ButtonContainer() {
  const theme = useTheme();

  return (
    <Wrapper>
      <CancelButton sizeLevel={1} theme={theme}>
        <img src={CANCEL} alt="작성 취소" />
        <span>작성 취소</span>
      </CancelButton>
      <CustomButton sizeLevel={2} bgColor={theme.colors.blue}>
        완료
      </CustomButton>
    </Wrapper>
  );
}

export default ButtonContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CancelButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.colors.background};
  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;
