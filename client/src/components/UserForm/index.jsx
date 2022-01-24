import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import CustomButton from '@/components/CustomButton';

import { toastAtom } from '@/store/atoms';
import { allCenterAlign } from '@/static/style/mixin';
import { useNavigate } from '@/core/Router';

let timer = 0;
const disableOpacity = 0.5;
const enableOpacity = 1;
const switchPageTime = 2000;

function UserForm({ btnContent, mode }) {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [opacity, setOpacity] = useState(disableOpacity);
  const setToast = useSetRecoilState(toastAtom);

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (mode === '로그인') {
      loginLogic();
      return;
    }
    if (mode === '회원가입') {
      registerLogic();
    }
  };

  const loginLogic = () => {
    // login API 통신
    alert('로그인');
  };

  const registerLogic = () => {
    // register API 통신
    setToast({
      isActive: true,
      title: '회원가입이 되었습니다❗️',
      content: '2초 후 로그인페이지로 이동합니다',
      mode: 'success',
    });

    switchPage();
  };

  const switchPage = () => {
    timer = setTimeout(() => {
      navigateTo('/');
    }, switchPageTime);
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
      setOpacity(disableOpacity);
      return;
    }
    if (type === 'id') pwd && setOpacity(enableOpacity);
    else if (type === 'pwd') id && setOpacity(enableOpacity);
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
