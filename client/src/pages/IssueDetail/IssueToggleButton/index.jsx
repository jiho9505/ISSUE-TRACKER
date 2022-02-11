import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { BOX_BLUE } from '@/static/constants/image-path';

function IssueToggleButton({ onClick, status }) {
  const theme = useTheme();
  return (
    <ToggleButton onClick={onClick} sizeLevel={1} theme={theme}>
      <img src={BOX_BLUE} />
      {status && status ? <span>이슈 닫기</span> : <span>이슈 열기</span>}
    </ToggleButton>
  );
}

export default IssueToggleButton;

const ToggleButton = styled(CustomButton)`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.blue};
  span {
    color: ${(props) => props.theme.colors.blue};
  }
`;
