import React from 'react';
import styled from '@emotion/styled';
import { ERROR_IMG } from '@/static/constants/image-path';

const Error = () => {
  return (
    <ErrorContainer>
      <span>Error occured</span>
      <img className="error" src={ERROR_IMG} alt="에러" />
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .error {
    width: 20%;
    height: 30%;
  }
`;
