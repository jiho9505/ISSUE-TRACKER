import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

function GreyLine() {
  const theme = useTheme();
  return <GreyLineDiv theme={theme}></GreyLineDiv>;
}

export default GreyLine;

const GreyLineDiv = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
