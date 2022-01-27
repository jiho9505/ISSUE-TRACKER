import React from 'react';
import styled from '@emotion/styled';

import { allCenterAlign } from '@/static/style/mixin';

const Empty = () => {
  return (
    <EmptyContainer>
      <EmptySpan>❗️EMPTY❗️</EmptySpan>
      <img
        className="empty"
        src="https://issue-tracker-2022.s3.ap-northeast-2.amazonaws.com/imgs/empty-box.gif"
        alt="Empty"
      />
    </EmptyContainer>
  );
};

export default Empty;

const EmptyContainer = styled.div`
  ${allCenterAlign}
  flex-direction: column;
  background-color: white;
  padding: 30px 0;
`;

const EmptySpan = styled.span`
  font-size: 2rem;
`;
