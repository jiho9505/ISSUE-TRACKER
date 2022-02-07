import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { WRITE_WHITE } from '@/static/constants/image-path';

function EditCompletionButton({ onSubmit }) {
  const theme = useTheme();
  return (
    <CompletionButton sizeLevel={1} type="submit" onSubmit={onSubmit} theme={theme}>
      <img src={WRITE_WHITE} />
      <span>편집 완료</span>
    </CompletionButton>
  );
}

export default EditCompletionButton;

const CompletionButton = styled(CustomButton)`
  background-color: ${(props) => props.theme.colors.blue};
`;
