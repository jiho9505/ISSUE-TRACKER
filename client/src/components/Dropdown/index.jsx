import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { seroCenterAlign } from '@/static/style/mixin';

function Dropdown({ className, children, title, onMouseLeave }) {
  const theme = useTheme();

  return (
    <DropdownContainer onMouseLeave={onMouseLeave} className={className} theme={theme.colors}>
      {title && <Title>{title}</Title>}
      {children}
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
