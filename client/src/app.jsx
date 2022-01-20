import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from './static/style/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer></PageContainer>
    </ThemeProvider>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export default App;
