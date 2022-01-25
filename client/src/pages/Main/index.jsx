import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import Header from '@/components/Header';
import IssueSideButton from '@/components/IssueSideButton';
import CustomButton from '@/components/CustomButton';
import Filter from './Filter';

import { defaultPagePadding } from '@/static/style/mixin';
import { PLUS_WHITE } from '@/static/constants/image-path';
import { useNavigate } from '@/core/Router';

function Main() {
  const theme = useTheme();
  const navigateTo = useNavigate();

  const handleClickWritingIssueBtn = () => {
    alert('이슈 작성 페이지로 이동');
  };

  return (
    <MainContainer>
      <Header />
      <MainTopContainer>
        <Filter />
        <MainTopRightContainer>
          <IssueSideButton />
          <CustomButton
            onClick={handleClickWritingIssueBtn}
            sizeLevel={1}
            bgColor={theme.colors.blue}
          >
            <img src={PLUS_WHITE} alt="이슈 작성 아이콘" />
            이슈 작성
          </CustomButton>
        </MainTopRightContainer>
      </MainTopContainer>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  ${defaultPagePadding}
`;

const MainTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const MainTopRightContainer = styled.div`
  display: flex;
`;
