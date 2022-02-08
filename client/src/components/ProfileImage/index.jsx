import React, { useState } from 'react';
import styled from '@emotion/styled';

import Dropdown from '../Dropdown';

import { allCenterAlign, seroCenterAlign } from '@/static/style/mixin';

function ProfileImage({ className, imageSrc, onClick = () => {}, items = [] }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickImg = () => {
    items.length > 0 && setShowDropdown(!showDropdown);
  };
  const handleMouseLeaveDropDown = () => setShowDropdown(false);

  const createDropdownMenu = () => {
    return items?.map((item, idx) => (
      <Item key={item._id} onClick={() => onClick(idx)}>
        <span>{item.name}</span>
      </Item>
    ));
  };

  return (
    <ProfileImageContainer className={className} items={items}>
      {imageSrc && <img src={imageSrc} onClick={handleClickImg} alt="유저 이미지" />}
      {showDropdown && (
        <ProfileDropdown title="Settings" onMouseLeave={handleMouseLeaveDropDown}>
          {createDropdownMenu()}
        </ProfileDropdown>
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
  cursor: ${(props) => (props.items.length > 0 ? 'pointer' : 'default')};
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

const Item = styled.div`
  ${seroCenterAlign}
  justify-content: space-between;
  background-color: white;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.text};
  height: 48px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  cursor: pointer;
`;
