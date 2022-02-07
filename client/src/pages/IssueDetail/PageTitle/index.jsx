import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

function PageTitle({ info }) {
  const theme = useTheme();

  const handleChangeTitle = () => {};
  return <Title theme={theme} value={info} disabled />;
}

export default PageTitle;

const Title = styled.input`
  font-size: 2rem;

  &:disabled {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
