import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ERROR_IMG } from '@/static/constants/image-path';
import { useTheme } from '@emotion/react';

const Error = ({ error, resetErrorBoundary }) => {
  const theme = useTheme();
  return (
    <ErrorContainer bgColor={theme.colors.background}>
      <span>{error.message}</span>
      <img className="error" src={ERROR_IMG} alt="에러" />
      <Button onClick={resetErrorBoundary} bgColor={theme.colors.blue}>
        Try again
      </Button>
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

  span {
    font-size: 1.2rem;
  }
  .error {
    width: 20%;
    height: 30%;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 18px;
  width: 200px;
  height: 60px;
  font-size: 1.3rem;
  color: white;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;
