import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { ERROR_IMG } from '@/static/constants/image-path';
import { useNavigate } from '@/core/Router';

const NotFound = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();

  return (
    <NotFoundContainer>
      <span>404 NOT FOUND PAGE❗️</span>
      <img className="notfound" src={ERROR_IMG} alt="NOT FOUND" />
      <CustomButton onClick={() => navigateTo('/')} sizeLevel={2} bgColor={theme.colors.blue}>
        Go To Home
      </CustomButton>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  span {
    font-size: 1.4rem;
  }

  .notfound {
    width: 20%;
    height: 30%;
  }
`;
