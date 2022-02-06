import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { EXCLAMATION_MARK, BOX } from '@/static/constants/image-path';
import { seroCenterAlign } from '@/static/style/mixin';

function ContentTopLeft() {
  const theme = useTheme();

  const [isIssueOpenStatus, setIsIssueOpenStatus] = useState(true);
  const handleClickOpenIssue = () => setIsIssueOpenStatus(true);
  const handleClickClosedIssue = () => setIsIssueOpenStatus(false);

  return (
    <Wrapper>
      <OpenIssueContainer
        color={isIssueOpenStatus ? 'black' : theme.colors.text}
        onClick={handleClickOpenIssue}
      >
        <img src={EXCLAMATION_MARK} />
        <span>열린 이슈(3)</span>
      </OpenIssueContainer>
      <CloseIssueContainer
        color={isIssueOpenStatus ? theme.colors.text : 'black'}
        onClick={handleClickClosedIssue}
      >
        <img src={BOX} />
        <span>닫힌 이슈(2)</span>
      </CloseIssueContainer>
    </Wrapper>
  );
}

export default ContentTopLeft;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bold;
`;

const OpenIssueContainer = styled.div`
  ${seroCenterAlign}
  gap: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const CloseIssueContainer = styled.div`
  ${seroCenterAlign}
  gap: 5px;
  color: ${(props) => props.color};
  cursor: pointer;
`;
