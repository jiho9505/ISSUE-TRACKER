import React from 'react';
import styled from '@emotion/styled';

import ProfileImage from '../ProfileImage';

import { useNavigate } from '@/core/Router';

function Header() {
  const navigateTo = useNavigate();
  const handleClickTitle = () => {
    navigateTo('/main');
  };

  return (
    <HeaderContainer>
      <Title onClick={handleClickTitle}>ISSUE TRACKER</Title>
      <ProfileImage />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.04em;
  cursor: pointer;
`;
