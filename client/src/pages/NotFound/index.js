import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { ERROR_IMG } from '@/static/constants/image-path';
import { Link } from '@/core/Router';

const NotFound = () => {
  const theme = useTheme();

  return (
    <NotFoundContainer>
      <span>404 NOT FOUND PAGE❗️</span>
      <img className="notfound" src={ERROR_IMG} alt="NOT FOUND" />
      <Link to="/">
        <HomeButton bgColor={theme.colors.blue}>Go To Home</HomeButton>
      </Link>
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

const HomeButton = styled.button`
  border: none;
  border-radius: 18px;
  width: 200px;
  height: 60px;
  font-size: 1.3rem;
  color: white;
  background-color: ${(props) => props.bgColor};
`;
