import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { seroCenterAlign } from '@/static/style/mixin';
import ContentTopLeft from '../ContentTopLeft';

function ContentTop() {
  const theme = useTheme();

  return (
    <ContentTopContainer>
      <ContentTopLeft />
      <ContentTopRight color={theme.colors.text}>
        <span>작성자</span>
      </ContentTopRight>
    </ContentTopContainer>
  );
}

export default ContentTop;

const ContentTopContainer = styled.div`
  ${seroCenterAlign}
  justify-content: space-between;
  height: 64px;
  padding: 0 67px 0 30px;
`;

const ContentTopRight = styled.div`
  display: flex;
  gap: 20px;

  div {
    ${seroCenterAlign}
    gap: 7px;
    color: ${(props) => props.color};
    font-weight: bold;
    cursor: pointer;
  }
`;
