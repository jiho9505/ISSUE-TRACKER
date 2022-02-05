import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import AddingFile from '@/components/AddingFile';

const COMMENT_MAX_LENGTH = 10000;

function WritingComment({ refreshForm }) {
  const theme = useTheme();
  const [description, setDescription] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const handleChangeTextArea = (e) => {
    setDescription(e.target.value);
    refreshForm({ description: e.target.value });
  };

  const handleFocusTextArea = () => setIsFocus(true);
  const handleBlurTextArea = () => setIsFocus(false);

  return (
    <WritingCommentContainer theme={theme} isFocus={isFocus}>
      {description && <TextAreaLabel>코멘트를 입력하세요</TextAreaLabel>}
      <TextArea
        placeholder="코멘트를 입력하세요"
        onChange={handleChangeTextArea}
        onFocus={handleFocusTextArea}
        onBlur={handleBlurTextArea}
        value={description}
        isFocus={isFocus}
        required
        maxLength={COMMENT_MAX_LENGTH}
      />
      {description && <TextLength>띄어쓰기 포함 {description.length}자</TextLength>}
      <AddingFile />
    </WritingCommentContainer>
  );
}

export default WritingComment;

const WritingCommentContainer = styled.div`
  position: relative;
  background-color: ${({ isFocus, theme }) => (isFocus ? 'white' : theme.colors.input)};
  outline: ${({ isFocus }) => (isFocus ? '0.3px solid black' : 'none')};
  border-radius: 16px;
  overflow: hidden;
`;

const TextAreaLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 24px;
  font-size: 0.75rem;
  line-height: 20px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const TextArea = styled.textarea`
  position: relative;
  width: 880px;
  height: 343px;
  border: none;
  padding: 16px 24px;
  resize: none;
  outline: none;
  padding-top: ${({ value }) => (value ? '35px' : '16px')};
  border-bottom: 1px dashed ${({ isFocus, theme }) => (isFocus ? 'black' : theme.colors.border)};
  background-color: ${({ isFocus, theme }) => (isFocus ? 'white' : theme.colors.input)};
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const TextLength = styled.span`
  position: absolute;
  right: 20px;
  top: 300px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
