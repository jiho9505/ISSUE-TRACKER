import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import ProfileImage from '../ProfileImage';

import { useNavigate } from '@/core/Router';
import { api } from '@/api/base';
import { toastAtom } from '@/store/toastState';
import { useUserImageQuery } from '@/hooks/querys/useUser';

let timer = 0;
const items = [{ _id: 'logout', name: '로그아웃' }];
const switchPageTime = 2000;

function Header() {
  const navigateTo = useNavigate();
  const setToast = useSetRecoilState(toastAtom);
  const imageSrc = useUserImageQuery();

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const handleClickTitle = () => navigateTo('/main');

  const handleClickProfile = async (idx) => {
    if (idx === 0) {
      const result = await api.get('/users/logout');

      if (result.isSuccess) {
        setToast({
          isActive: true,
          title: '로그아웃이 되었습니다❗️',
          content: '2초 후 로그인페이지로 이동합니다',
          mode: 'success',
        });
        switchPage();
      }
      if (!result.isSuccess) throw new Error(result.message);
    }
  };

  const switchPage = () => {
    timer = setTimeout(() => {
      navigateTo('/');
    }, switchPageTime);
  };

  return (
    <HeaderContainer>
      <Title onClick={handleClickTitle}>ISSUE TRACKER</Title>
      <ProfileImage onClick={handleClickProfile} imageSrc={imageSrc} items={items} />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
