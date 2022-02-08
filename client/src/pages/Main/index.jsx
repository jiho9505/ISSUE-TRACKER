import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';

import Header from '@/components/Header';
import MainTop from './MainTop';
import MainContent from './MainContent';
import IssuePagination from './IssuePagination';

import { defaultPageFrame } from '@/static/style/mixin';
import { paramGetIssueAtom } from '@/store/getIssueParamState';

function Main() {
  const setParamGetIssue = useSetRecoilState(paramGetIssueAtom);

  useEffect(() => {
    setParamGetIssue({ status: 'open', filter: -1, page: 1 });
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainTop />
      <MainContent />
      <IssuePagination />
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  ${defaultPageFrame}
`;
