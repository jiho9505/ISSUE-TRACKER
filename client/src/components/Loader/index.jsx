import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Loader = () => {
  const theme = useTheme();
  return (
    <LoadingContainer theme={theme}>
      <div className="loading"></div>
    </LoadingContainer>
  );
};

export default Loader;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  .loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid;
    border-color: white;
    border-radius: 50%;
    border-top-color: #8b00ff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
`;
