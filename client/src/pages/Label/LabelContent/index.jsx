import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import LabelItem from '../LabelItem';

import { useLabelLengthQuery } from '@/hooks/querys/useLabelLength';

function LabelContent() {
  const theme = useTheme();
  const labelLength = useLabelLengthQuery();

  return (
    <LabelContentContainer theme={theme}>
      <TitleContainer>
        <Title>{labelLength}개의 레이블</Title>
      </TitleContainer>
      <LabelItem />
    </LabelContentContainer>
  );
}

export default LabelContent;

const LabelContentContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  padding: 18px 32px;
`;

const Title = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;
