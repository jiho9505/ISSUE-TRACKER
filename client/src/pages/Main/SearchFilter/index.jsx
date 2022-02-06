import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useRecoilState } from 'recoil';

import CustomButton from '@/components/CustomButton';
import Dropdown from '@/components/Dropdown';

import { FILTER, SEARCH, CHECKED_CIRCLE, CIRCLE } from '@/static/constants/image-path';
import { useIssueFilterQuery } from '@/hooks/querys/useIssueFilter';
import { seroCenterAlign } from '@/static/style/mixin';
import { paramGetIssueAtom } from '@/store/getIssueParamState';

function SearchFilter() {
  const theme = useTheme();
  const [showFilterList, setShowFilterList] = useState(false);
  const [filterPlaceHolder, setFilterPlaceHolder] = useState('no filter');
  const filterItems = useIssueFilterQuery();
  const [choicedIdx, setchoicedIdx] = useState(-1);
  const [paramGetIssue, setParamGetIssue] = useRecoilState(paramGetIssueAtom);

  const handleClickFilterButton = () => setShowFilterList(!showFilterList);
  const handleMouseLeaveDropDown = () => setShowFilterList(false);

  const handleClickDropDown = (idx) => {
    const choicedFilter = filterItems[idx];
    if (choicedIdx === idx) {
      setchoicedIdx(-1);
      setFilterPlaceHolder('no filter');
      setParamGetIssue({ ...paramGetIssue, filter: -1 });
      return;
    }
    setchoicedIdx(idx);
    setFilterPlaceHolder(choicedFilter.form);
    setParamGetIssue({ ...paramGetIssue, filter: idx });
  };

  const createCircleImg = (choicedIdx, idx) => {
    return choicedIdx === idx ? <img src={CHECKED_CIRCLE} /> : <img src={CIRCLE} />;
  };

  const createFilters = () => {
    return filterItems?.map((item, idx) => (
      <Item key={item._id} onClick={() => handleClickDropDown(idx)}>
        <span>{item.name}</span>
        {createCircleImg(choicedIdx, idx)}
      </Item>
    ));
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
        <FilterDropdown onMouseLeave={handleMouseLeaveDropDown} title="이슈 필터">
          {createFilters()}
        </FilterDropdown>
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

const Item = styled.div`
  ${seroCenterAlign}
  justify-content: space-between;
  background-color: white;
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.text};
  height: 48px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  cursor: pointer;
`;
