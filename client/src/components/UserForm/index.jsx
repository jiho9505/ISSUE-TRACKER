import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { allCenterAlign } from '@/static/style/mixin';

function UserForm({ btnContent, mode }) {
  const theme = useTheme();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [opacity, setOpacity] = useState(0.5);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (mode === '로그인') {
      alert('로그인');
    } else if (mode === '회원가입') {
      alert('회원가입');
      // 2초 후 로그인 페이지로
    }
  };

  const handleChangeId = (e) => {
    controlDisable(e.currentTarget.value, 'id');
    setId(e.currentTarget.value);
  };

  const handleChangePwd = (e) => {
    controlDisable(e.currentTarget.value, 'pwd');
    setPwd(e.currentTarget.value);
  };

  const controlDisable = (value, type) => {
    if (!value) {
      setOpacity(0.5);
      return;
    }
    if (type === 'id') {
      pwd && setOpacity(1);
    } else if (type === 'pwd') {
      id && setOpacity(1);
    }
  };

  return (
    <Form onSubmit={handleSubmitForm} color={theme.colors.blue}>
      <input
        value={id}
        onChange={handleChangeId}
        type="text"
        autoComplete="username"
        required
        placeholder="아이디"
      ></input>
      <input
        value={pwd}
        onChange={handleChangePwd}
        type="password"
        autoComplete="current-password"
        required
        placeholder="비밀번호"
      ></input>
      <CustomButton
        opacity={opacity}
        sizeLevel={3}
        bgColor={theme.colors.blue}
        onSubmit={handleSubmitForm}
      >
        {btnContent}
      </CustomButton>
    </Form>
  );
}

export default UserForm;

const Form = styled.form`
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
    color: black;
    background: ${(props) => props.theme.colors.input};
    border-radius: 16px;
  }

  .login-button {
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
