import React from 'react';
import styled from '@emotion/styled';

import { allCenterAlign } from '@/static/style/mixin';
import { PREPARE } from '@/static/constants/image-path';
import { useTheme } from '@emotion/react';

const PreParation = () => {
  const theme = useTheme();
  return (
    <PreParationContainer>
      <PreParationSpan theme={theme}>Coming soon...</PreParationSpan>
      <img src={PREPARE} alt="준비 중" />
    </PreParationContainer>
  );
};

export default PreParation;

const PreParationContainer = styled.div`
  ${allCenterAlign}
  flex-direction: column;
  background-color: white;
  padding: 30px 0;
  height: 100%;

  img {
    margin-top: 50px;
  }
`;

const PreParationSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-top: 20px;
`;
