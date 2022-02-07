import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { WRITE_BLUE, CANCEL_BLUE } from '@/static/constants/image-path';

function TitleEditorButton({ setIsEditTitle, isEditTitle }) {
  const theme = useTheme();

  const handleClickButton = () => setIsEditTitle(!isEditTitle);

  return (
    <EditorButton sizeLevel={1} theme={theme} onClick={handleClickButton}>
      {isEditTitle ? (
        <>
          <img src={CANCEL_BLUE} />
          <span>편집 취소</span>
        </>
      ) : (
        <>
          <img src={WRITE_BLUE} />
          <span>제목 편집</span>
        </>
      )}
    </EditorButton>
  );
}

export default TitleEditorButton;

const EditorButton = styled(CustomButton)`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.blue};
  span {
    color: ${(props) => props.theme.colors.blue};
  }
`;
