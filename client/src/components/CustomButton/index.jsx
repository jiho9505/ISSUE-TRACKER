import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { allCenterAlign } from '@/static/style/mixin';

const CustomButton = ({
  children,
  onSubmit = () => {},
  onClick = () => {},
  sizeLevel,
  bgColor,
  color = 'white',
  opacity = 1,
  className,
}) => {
  return (
    <Button
      onSubmit={onSubmit}
      onClick={onClick}
      sizeLevel={sizeLevel}
      bgColor={bgColor}
      spanColor={color}
      opacity={opacity}
      className={className}
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
  opacity: ${(props) => props.opacity};
  ${() => getButtonCss}

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    ${() => getFontSize}
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.spanColor};
  }
`;

const getFontSize = ({ sizeLevel }) => {
  switch (sizeLevel) {
    case 1:
      return css`
        font-size: 12px;
      `;
    case 2:
      return css`
        font-size: 15px;
      `;
    case 3:
      return css`
        font-size: 18px;
        line-height: 32px;
      `;
    default:
      return css`
        font-size: 18px;
        line-height: 32px;
      `;
  }
};

const getButtonCss = ({ sizeLevel }) => {
  switch (sizeLevel) {
    case 1:
      return css`
        width: 120px;
        height: 40px;
        background: #007aff;
        border-radius: 11px;
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
