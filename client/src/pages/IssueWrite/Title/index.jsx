import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

function Title() {
  const theme = useTheme();
  return <TitleSpan theme={theme}>새로운 이슈 작성</TitleSpan>;
}

export default Title;

const TitleSpan = styled.h2`
  font-size: 2rem;
  margin-top: 60px;
  display: block;
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
