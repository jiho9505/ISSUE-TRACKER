import React from 'react';
import styled from '@emotion/styled';

function LabelButton({ info }) {
  return (
    <Button type="button" bgColor={info.bgColor} textColor={info.textColor}>
      {info.name}
    </Button>
  );
}

export default LabelButton;

const Button = styled.button`
  border-radius: 30px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: 8px 12px;
  font-size: 12px;
  min-width: 120px;
  height: 30px;
`;
