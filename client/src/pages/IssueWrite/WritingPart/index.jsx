import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import WritingComment from '@/components/WritingComment';

import { preventXSS } from '@/utils/helper';

const TITLE_MAX_LENGTH = '30';

function WritingPart({ refreshState }) {
  const theme = useTheme();
  const [title, setTitle] = useState('');

  const handleChangeTitle = (e) => {
    const newTitle = preventXSS(e.target.value);
    setTitle(newTitle);
    refreshState('TITLE', e.target.value);
  };

  return (
    <WritingPartContainer theme={theme}>
      {title && <TitleLabel>제목</TitleLabel>}
      <IssueTitle
        value={title}
        onChange={handleChangeTitle}
        placeholder="제목"
        required
        maxLength={TITLE_MAX_LENGTH}
      />
      <WritingComment refreshState={refreshState} />
    </WritingPartContainer>
  );
}

export default WritingPart;

const WritingPartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
