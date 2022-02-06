import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { EXCLAMATION_MARK, BOX } from '@/static/constants/image-path';
import { seroCenterAlign } from '@/static/style/mixin';
import { useIssueLengthQuery } from '@/hooks/querys/useIssue';
import { paramGetIssueAtom } from '@/store/getIssueParamState';

function ContentTopLeft() {
  const theme = useTheme();
  const [isIssueOpenStatus, setIsIssueOpenStatus] = useState(true);
  const [paramGetIssue, setParamGetIssue] = useRecoilState(paramGetIssueAtom);
  const issueLength = useIssueLengthQuery(paramGetIssue);
  const openIssueLength = issueLength ? issueLength.openIssueLength : 0;
  const closeIssueLength = issueLength ? issueLength.closeIssueLength : 0;

  const handleClickOpenIssue = () => {
    if (!isIssueOpenStatus) {
      setIsIssueOpenStatus(true);
      setParamGetIssue({ ...paramGetIssue, status: 'open', page: 1 });
    }
  };
  const handleClickClosedIssue = () => {
    if (isIssueOpenStatus) {
      setIsIssueOpenStatus(false);
      setParamGetIssue({ ...paramGetIssue, status: 'close', page: 1 });
    }
  };

  return (
    <Wrapper>
      <OpenIssueContainer
        color={isIssueOpenStatus ? 'black' : theme.colors.text}
        onClick={handleClickOpenIssue}
      >
        <img src={EXCLAMATION_MARK} />
        <span>열린 이슈({openIssueLength})</span>
      </OpenIssueContainer>
      <CloseIssueContainer
        color={isIssueOpenStatus ? theme.colors.text : 'black'}
        onClick={handleClickClosedIssue}
      >
        <img src={BOX} />
        <span>닫힌 이슈({closeIssueLength})</span>
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
