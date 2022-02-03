import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';
import Dropdown from '@/components/Dropdown';

import { FILTER, SEARCH } from '@/static/constants/image-path';
import { useIssueFilterQuery } from '@/hooks/querys/useIssueFilter';

function SearchFilter() {
  const theme = useTheme();
  const [showFilterList, setShowFilterList] = useState(false);
  const [filterPlaceHolder, setFilterPlaceHolder] = useState('all');
  const filterItems = useIssueFilterQuery();
  const [choicedIdx, setchoicedIdx] = useState(-1);

  const handleClickFilterButton = () => setShowFilterList(!showFilterList);
  const handleMouseLeaveDropDown = () => setShowFilterList(false);

  const handleClickDropDown = (e) => {
    const idx = Number(e.currentTarget.dataset.idx);
    const choicedFilter = filterItems[idx];
    if (choicedIdx === idx) {
      setchoicedIdx(-1);
      setFilterPlaceHolder('all');
      return;
    }
    setchoicedIdx(idx);
    setFilterPlaceHolder(choicedFilter.form);
  };

  return (
    <SearchFilterContainer>
      <SearchFilterButton
        sizeLevel={1}
        color={theme.colors.text}
        onClick={handleClickFilterButton}
        theme={theme}
      >
        <span>필터</span>
        <img src={FILTER} alt="필터 아이콘" />
      </SearchFilterButton>
      <SearchFilterInput disabled theme={theme} type="text" placeholder={filterPlaceHolder} />
      <SearchIcon src={SEARCH} alt="검색 아이콘" />
      {showFilterList && (
        <FilterDropdown
          onMouseLeave={handleMouseLeaveDropDown}
          onClick={handleClickDropDown}
          title="이슈 필터"
          items={filterItems}
          choicedIdx={choicedIdx}
        />
      )}
    </SearchFilterContainer>
  );
}

export default SearchFilter;

const SearchFilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchFilterButton = styled(CustomButton)`
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};

  width: 110px;

  img {
    margin-left: 10px;
  }
`;

const SearchFilterInput = styled.input`
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

const FilterDropdown = styled(Dropdown)`
  left: 0px;
  top: 50px;
`;
