import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { PLUS } from '@/static/constants/image-path';

const ISSUE_OPTIONS = ['담당자', '레이블', '마일스톤'];

function IssueOptionContainer() {
  const theme = useTheme();

  return (
    <Wrapper theme={theme}>
      {ISSUE_OPTIONS.map((option, idx) => (
        <IssueOptionItem key={idx}>
          <span>{option}</span>
          <img src={PLUS} alt={option + '추가'} />
        </IssueOptionItem>
      ))}
    </Wrapper>
  );
}

export default IssueOptionContainer;

const Wrapper = styled.div`
  width: 308px;
  height: 290px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
`;

const IssueOptionItem = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    border-bottom: none;
  }

  img {
    cursor: pointer;
  }
`;
