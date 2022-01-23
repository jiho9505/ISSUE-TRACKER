import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';
import UserForm from '@/components/UserForm';

import { allCenterAlign } from '@/static/style/mixin';
import { Link } from '@/core/Router';

function Login() {
  const theme = useTheme();

  const handleClickGithubLogin = () => {
    alert('깃헙로그인 준비중..!');
  };

  return (
    <LoginContainer>
      <Title>ISSUE TRACKER</Title>
      <CustomButton sizeLevel={3} bgColor="black" onClick={handleClickGithubLogin}>
        GitHub 계정으로 로그인
      </CustomButton>
      <OrSpan color={theme.colors.placeholder}>or</OrSpan>
      <UserForm btnContent="아이디로 로그인" mode="로그인" />
      <Link to="/register">
        <RegisterSpan color={theme.colors.fitlerText}>회원가입</RegisterSpan>
      </Link>
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
