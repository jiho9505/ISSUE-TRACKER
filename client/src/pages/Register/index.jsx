import React from 'react';
import styled from '@emotion/styled';

import UserForm from '@/components/UserForm';

import { allCenterAlign } from '@/static/style/mixin';
import { useNavigate } from '@/core/Router';

function Register() {
  const navigateTo = useNavigate();
  const handleClickTitle = () => navigateTo('/');

  return (
    <RegisterContainer>
      <Title onClick={handleClickTitle}>ISSUE TRACKER</Title>
      <UserForm btnContent="회원가입" mode="회원가입" />
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled.div`
  ${allCenterAlign}
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 30px;
`;

const Title = styled.h2`
  font-family: Montserrat;
  font-style: italic;
  font-weight: normal;
  font-size: 56px;
  line-height: 72px;
  letter-spacing: -0.04em;
  cursor: pointer;
`;
