import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { ERROR_IMG } from '@/static/constants/image-path';

const Error = ({ error, resetErrorBoundary }) => {
  const theme = useTheme();

  return (
    <ErrorContainer bgColor={theme.colors.background}>
      <span class="error-title">ERROR❗️</span>
      <span>{error.message}</span>
      <img className="error" src={ERROR_IMG} alt="에러" />
      <CustomButton handleClick={resetErrorBoundary} sizeLevel={2} bgColor={theme.colors.blue}>
        Try again
      </CustomButton>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};

  .error-title {
    color: #f56342;
    margin-bottom: 20px;
  }

  span {
    font-size: 1.2rem;
  }

  .error {
    width: 20%;
    height: 30%;
  }
`;
