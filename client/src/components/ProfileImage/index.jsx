import React, { useState } from 'react';
import styled from '@emotion/styled';

import Dropdown from '../Dropdown';

import { allCenterAlign } from '@/static/style/mixin';
import { useUserImageQuery } from '@/hooks/querys/useUserImage';

function ProfileImage({ className, onClick = () => {}, items }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ImageSrc = useUserImageQuery();

  const handleClickImg = () => {
    items.length > 0 && setShowDropdown(!showDropdown);
  };
  const handleMouseLeaveDropDown = () => setShowDropdown(false);

  return (
    <ProfileImageContainer className={className}>
      <img src={ImageSrc} onClick={handleClickImg} alt="유저 이미지" />
      {showDropdown && (
        <ProfileDropdown
          items={items}
          title="Settings"
          onClick={onClick}
          onMouseLeave={handleMouseLeaveDropDown}
        />
      )}
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
  position: relative;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const ProfileDropdown = styled(Dropdown)`
  right: 0px;
  top: 45px;
  width: 140px;
`;
