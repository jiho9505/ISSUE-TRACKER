import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { allCenterAlign } from '@/static/style/mixin';

const CustomButton = ({
  children,
  onSubmit,
  onClick,
  sizeLevel,
  bgColor,
  color = 'white',
  opacity = 1,
}) => {
  return (
    <Button
      onSubmit={onSubmit ? onSubmit : () => {}}
      onClick={onClick ? onClick : () => {}}
      sizeLevel={sizeLevel}
      bgColor={bgColor}
      spanColor={color}
      opacity={opacity}
    >
      <span>{children}</span>
    </Button>
  );
};

export default CustomButton;

const Button = styled.button`
  ${allCenterAlign}
  padding: 0px 24px;
  background: ${(props) => props.bgColor};
  border-radius: 20px;
  margin-top: 30px;
  opacity: ${(props) => props.opacity};
  ${() => getButtonSize}

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: ${(props) => props.spanColor};
  }
`;

const getButtonSize = ({ sizeLevel }) => {
  switch (sizeLevel) {
    case 1:
      return css`
        width: 120px;
        height: 40px;
      `;
    case 2:
      return css`
        width: 240px;
        height: 56px;
      `;
    case 3:
      return css`
        width: 340px;
        height: 64px;
      `;
    default:
      return css`
        width: 340px;
        height: 64px;
      `;
  }
};
