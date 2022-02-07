import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import WritingTitle from '@/components/WritingTitle';

function PageTitle({ info, isEditTitle, refreshState, newTitle }) {
  const theme = useTheme();

  return (
    <Wrapper>
      {isEditTitle ? (
        <WritingPageTitle refreshState={refreshState} init={newTitle} mode="EDIT" />
      ) : (
        <Title theme={theme}>{info}</Title>
      )}
    </Wrapper>
  );
}

export default PageTitle;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const WritingPageTitle = styled(WritingTitle)`
  &:focus {
    background-color: white;
    border: 1px solid black;
  }
`;
