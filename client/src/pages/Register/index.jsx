import React from 'react';
import styled from '@emotion/styled';

import UserForm from '@/components/UserForm';

import { allCenterAlign } from '@/static/style/mixin';

function Register() {
  return (
    <RegisterContainer>
      <Title>ISSUE TRACKER</Title>
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
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 24px;

    width: 340px;
    height: 64px;
    font-size: 16px;
    line-height: 28px;

    background: #eff0f6;
    border-radius: 16px;
  }

  .Register-button {
    ${allCenterAlign}
    padding: 0px 24px;
    width: 340px;
    height: 64px;
    background: ${(props) => props.color};
    opacity: ${(props) => props.opacity};
    border-radius: 20px;

    span {
      color: white;
      font-family: Noto Sans KR;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 32px;
    }
  }
`;
