import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import { allCenterAlign } from '@/static/style/mixin';
import { getTotalPage } from '@/utils/helper';

function Pagination({ length, standard, refreshState }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const count = getTotalPage(length, standard);
  const theme = useTheme();

  const handleClickPage = (idx) => {
    setActiveIdx(idx);
    refreshState(idx + 1);
  };

  return (
    <PaginationContainer theme={theme}>
      {Array.from({ length: count }).map((_, idx) => (
        <Page key={idx} isActive={activeIdx === idx} onClick={() => handleClickPage(idx)}>
          {idx + 1}
        </Page>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;

const PaginationContainer = styled.div`
  ${allCenterAlign}
  padding: 30px 0px;
  gap: 20px;
`;

const Page = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.input};
  background-color: ${(props) => (props.isActive ? props.theme.colors.text : 'white')};
  ${allCenterAlign}
  color : ${(props) => (props.isActive ? 'white' : 'black')}
`;
