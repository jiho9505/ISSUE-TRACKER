import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import CustomButton from '@/components/CustomButton';

import { toastAtom } from '@/store/atoms';
import { allCenterAlign } from '@/static/style/mixin';
import { useNavigate } from '@/core/Router';
import { api } from '@/api/base';

let timer = 0;
const disableOpacity = 0.5;
const enableOpacity = 1;
const switchPageTime = 2000;

/**
 * @param mode : register | login
 */
function UserForm({ btnContent, mode }) {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [opacity, setOpacity] = useState(disableOpacity);
  const setToast = useSetRecoilState(toastAtom);

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => controlOpacity(), [id, pwd, confirmPwd]);

  const controlOpacity = () => {
    if (mode === '로그인') {
      if (id && pwd) setOpacity(enableOpacity);
      else setOpacity(disableOpacity);
    } else if (mode === '회원가입') {
      if (id && pwd && confirmPwd) setOpacity(enableOpacity);
      else setOpacity(disableOpacity);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (mode === '로그인') {
      handleLoginAPI();
    } else if (mode === '회원가입') {
      const isValid = checkValidation();
      isValid && handleRegisterAPI();
    }
  };

  const checkValidation = () => {
    if (!checkIdValidation()) {
      setToast({
        isActive: true,
        title: 'ID는 영어 또는 영어+숫자 조합만 가능합니다.',
        mode: 'caution',
      });
      return false;
    }
    if (!checkPwdValidation()) {
      setToast({
        isActive: true,
        title: '비밀번호는 영어+숫자+특수문자 조합만 가능합니다.',
        mode: 'caution',
      });
      return false;
    }
    if (pwd !== confirmPwd) {
      setToast({
        isActive: true,
        title: '비밀번호가 일치하지 않습니다.',
        mode: 'caution',
      });
      return false;
    }
    return true;
  };

  const checkIdValidation = () => {
    if (id.search(/[a-zA-Z]/g) === -1) return false;
    if (id.search(/[^a-zA-Z0-9]/g) >= 0) return false;
    return true;
  };

  const checkPwdValidation = () => {
    if (pwd.search(/[a-zA-Z]/g) === -1) return false;
    if (pwd.search(/[0-9]/g) === -1) return false;
    if (pwd.search(/[~!@#$%^&*-+=]/g) === -1) return false;
    return true;
  };

  const handleLoginAPI = async () => {
    const result = await api.post('/users/login', { id, password: pwd });
    if (!result.isSuccess) {
      setToast({
        isActive: true,
        title: result.message,
        mode: 'fail',
      });
      return;
    }

    navigateTo('/main');
  };

  const handleRegisterAPI = async () => {
    const result = await api.post('/users/register', { id, password: pwd });
    if (!result.isSuccess) {
      setToast({
        isActive: true,
        title: result.message,
        mode: 'fail',
      });
      return;
    }

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

  const handleChangeId = (e) => setId(e.currentTarget.value);
  const handleChangePwd = (e) => setPwd(e.currentTarget.value);
  const handleChangeConfirmPwd = (e) => setConfirmPwd(e.currentTarget.value);

  return (
    <Form onSubmit={handleSubmitForm} color={theme.colors.blue}>
      <input
        value={id}
        onChange={handleChangeId}
        type="text"
        autoComplete="username"
        required
        placeholder="아이디"
        minLength={mode === '회원가입' ? '6' : ''}
        maxLength="16"
      ></input>
      <input
        value={pwd}
        onChange={handleChangePwd}
        type="password"
        autoComplete="current-password"
        required
        placeholder="비밀번호"
        minLength={mode === '회원가입' ? '6' : ''}
        maxLength="12"
      ></input>
      {mode === '회원가입' && (
        <input
          value={confirmPwd}
          onChange={handleChangeConfirmPwd}
          type="password"
          required
          placeholder="비밀번호 재확인"
          minLength="6"
          maxLength="12"
        ></input>
      )}
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
