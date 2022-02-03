import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { CHECKED_CIRCLE, CIRCLE } from '@/static/constants/image-path';
import { seroCenterAlign } from '@/static/style/mixin';

const titlesHavingCircle = ['이슈 필터'];

function Dropdown({ className, title, items, onMouseLeave, onClick, choicedIdx }) {
  const theme = useTheme();

  const createCircleImg = (idx) => {
    if (titlesHavingCircle.includes(title)) {
      return idx === choicedIdx ? <img src={CHECKED_CIRCLE} /> : <img src={CIRCLE} />;
    }
  };

  const createItems = items?.map((item, idx) => (
    <Item key={item._id} theme={theme.colors} onClick={onClick} data-idx={idx}>
      <span>{item.name}</span>
      {createCircleImg(idx)}
    </Item>
  ));

  return (
    <DropdownContainer onMouseLeave={onMouseLeave} className={className} theme={theme.colors}>
      {title && <Title>{title}</Title>}
      {createItems}
    </DropdownContainer>
  );
}

export default Dropdown;

const DropdownContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 16px;
  background-color: ${(props) => props.theme.background};
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

const Title = styled.div`
  ${seroCenterAlign}
  padding: 8px 16px;
  height: 48px;
`;

const Item = styled.div`
  ${seroCenterAlign}
  justify-content: space-between;
  background-color: white;
  padding: 8px 16px;
  color: ${(props) => props.theme.text};
  height: 48px;
  border-top: 1px solid ${(props) => props.theme.border};
  cursor: pointer;
`;
