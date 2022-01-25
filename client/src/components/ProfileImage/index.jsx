import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import { allCenterAlign } from '@/static/style/mixin';

/**
 *  TODO:
 *  useQuery를 이용해 이미지 캐싱
 *  로그아웃 시 초기화 고려
 */
function ProfileImage({ className }) {
  return (
    <ProfileImageContainer className={className}>
      <span>f</span>
    </ProfileImageContainer>
  );
}

export default ProfileImage;

const ProfileImageContainer = styled.div`
  ${allCenterAlign}
  border-radius: 50%;
  background: black;
  width: 44px;
  height: 44px;
  cursor: pointer;

  span {
    color: white;
    font-size: 1.7rem;
  }
`;
