import React from 'react';
import styled from '@emotion/styled';

import WritingComment from '@/components/WritingComment';
import WritingTitle from '@/components/WritingTitle';

function WritingPart({ refreshState, value }) {
  return (
    <WritingPartContainer>
      <WritingTitle refreshState={refreshState} />
      <WritingComment refreshState={refreshState} value={value} />
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
