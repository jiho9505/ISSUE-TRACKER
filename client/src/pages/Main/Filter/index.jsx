import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { FILTER, SEARCH } from '@/static/constants/image-path';

function Filter() {
  const theme = useTheme();

  return (
    <FilterContainer>
      <FilterButton
        borderColor={theme.colors.border}
        sizeLevel={1}
        bgColor={theme.colors.background}
        color={theme.colors.text}
      >
        <span>필터</span>
        <img src={FILTER} alt="필터 아이콘" />
      </FilterButton>
      <FilterInput theme={theme} type="text" placeholder="is:issue is:open" />
      <SearchIcon src={SEARCH} alt="검색 아이콘" />
    </FilterContainer>
  );
}

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const FilterButton = styled(CustomButton)`
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid ${(props) => props.borderColor};
  width: 110px;

  img {
    margin-left: 10px;
  }
`;

const FilterInput = styled.input`
  width: 472px;
  height: 40px;
  background: ${(props) => props.theme.colors.input};
  border-radius: 0px 11px 11px 0px;
  padding: 0 35px;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%-20px;
  left: 21%;
`;
