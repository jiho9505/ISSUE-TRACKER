import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import LabelItem from '../LabelItem';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';

import { useLabelLengthQuery } from '@/hooks/querys/useLabel';
import { useLabelQuery } from '@/hooks/querys/useLabel';

function LabelContent() {
  const theme = useTheme();
  const labelLength = useLabelLengthQuery();
  const [labels, isLoading] = useLabelQuery();

  const createLabelItems = () => {
    return labels?.map((label) => {
      return <LabelItem key={label._id} label={label} />;
    });
  };

  if (isLoading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  return (
    <LabelContentContainer theme={theme}>
      <TitleContainer>
        <Title>{labelLength}개의 레이블</Title>
      </TitleContainer>
      {labels?.length === 0 ? <Empty /> : createLabelItems()}
    </LabelContentContainer>
  );
}

export default LabelContent;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
