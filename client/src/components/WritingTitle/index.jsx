import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { preventXSS } from '@/utils/helper';

const TITLE_MAX_LENGTH = '30';

function WritingTitle({ refreshState, className, init = '', mode = '' }) {
  const theme = useTheme();
  const [title, setTitle] = useState(init ? init : '');

  const handleChangeTitle = (e) => {
    const newTitle = preventXSS(e.target.value);
    setTitle(newTitle);
    mode === 'EDIT' ? refreshState(newTitle) : refreshState('TITLE', newTitle);
  };

  return (
    <>
      {title && <TitleLabel className={className}>제목</TitleLabel>}
      <IssueTitle
        className={className}
        theme={theme}
        value={title}
        onChange={handleChangeTitle}
        placeholder="제목"
        required
        maxLength={TITLE_MAX_LENGTH}
      />
    </>
  );
}

export default WritingTitle;

const TitleLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 24px;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const IssueTitle = styled.input`
  width: 880px;
  height: 56px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 14px;
  padding: 0px 24px;
  padding-top: ${({ value }) => (value ? '12px' : '0px')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
