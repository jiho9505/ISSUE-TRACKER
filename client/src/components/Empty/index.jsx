import React from 'react';
import styled from '@emotion/styled';

import { allCenterAlign } from '@/static/style/mixin';
import { EMPTY } from '@/static/constants/image-path';
import { useTheme } from '@emotion/react';

const Empty = () => {
  const theme = useTheme();
  return (
    <EmptyContainer>
      <EmptySpan theme={theme}>Nothing is here...</EmptySpan>
      <img src={EMPTY} alt="Empty" />
    </EmptyContainer>
  );
};

export default Empty;

const EmptyContainer = styled.div`
  ${allCenterAlign}
  flex-direction: column;
  background-color: white;
  padding: 30px 0;
`;

const EmptySpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
