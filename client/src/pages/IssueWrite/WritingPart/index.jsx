import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import WritingComment from '@/components/WritingComment';

function WritingPart({ form, setForm }) {
  const theme = useTheme();
  const [title, setTitle] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setForm(e.target.value);
  };

  return (
    <WritingPartContainer theme={theme}>
      {title && <TitleLabel>제목</TitleLabel>}
      <IssueTitle value={title} onChange={handleChangeTitle} placeholder="제목" />
      <WritingComment description={form?.description} setForm={setForm} />
    </WritingPartContainer>
  );
}

export default WritingPart;

const WritingPartContainer = styled.div`
  position: relative;
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
