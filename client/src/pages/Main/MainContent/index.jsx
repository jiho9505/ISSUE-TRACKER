import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import ContentTop from '../ContentTop';
import ContentMain from '../ContentMain';

function MainContent() {
  const theme = useTheme();
  return (
    <MainContentContainer color={theme.colors.border}>
      <ContentTop />
      <ContentMain />
    </MainContentContainer>
  );
}
export default MainContent;

const MainContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.color};
  border-radius: 16px;
  margin-top: 40px;
  overflow: hidden;
`;
