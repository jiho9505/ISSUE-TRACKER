import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';
import UserForm from '@/components/UserForm';

import { allCenterAlign } from '@/static/style/mixin';
import { useNavigate } from '@/core/Router';

function Login() {
  const theme = useTheme();
  const navigateTo = useNavigate();

  const handleClickGithubLogin = async () => {
    const URL = `https://github.com/login/oauth/authorize?client_id=${process.env.OAUTH_ID}`;
    window.location.assign(URL);
  };

  const handleClickRegisterSpan = () => {
    navigateTo('/register');
  };

  return (
    <LoginContainer>
      <Title>ISSUE TRACKER</Title>
      <CustomButton sizeLevel={3} bgColor="black" onClick={handleClickGithubLogin}>
        GitHub 계정으로 로그인
      </CustomButton>
      <OrSpan color={theme.colors.placeholder}>or</OrSpan>
      <UserForm btnContent="아이디로 로그인" mode="로그인" />
      <RegisterSpan onClick={handleClickRegisterSpan} color={theme.colors.fitlerText}>
        회원가입
      </RegisterSpan>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
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

const OrSpan = styled.span`
  color: ${(props) => props.color};
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;

const RegisterSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
