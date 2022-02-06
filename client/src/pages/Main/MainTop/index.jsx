import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import IssueOptionButtons from '@/components/IssueOptionButtons';
import CustomButton from '@/components/CustomButton';
import SearchFilter from '../SearchFilter';

import { PLUS_WHITE } from '@/static/constants/image-path';
import { useNavigate } from '@/core/Router';

function MainTop() {
  const theme = useTheme();
  const navigateTo = useNavigate();

  const handleClickWritingIssueBtn = () => {
    navigateTo('/write');
  };

  return (
    <MainTopContainer>
      <SearchFilter />
      <MainTopRightContainer>
        <IssueOptionButtons />
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
  );
}

export default MainTop;

const MainTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;

const MainTopRightContainer = styled.div`
  display: flex;
`;
