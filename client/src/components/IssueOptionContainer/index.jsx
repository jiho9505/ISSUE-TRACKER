import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import Dropdown from '../Dropdown';
import ProfileImage from '../ProfileImage';
import LabelButton from '../LabelButton';

import { api } from '@/api/base';
import { seroCenterAlign, allCenterAlign } from '@/static/style/mixin';
import { CHECKED_CIRCLE, CIRCLE, PLUS } from '@/static/constants/image-path';

const ISSUE_OPTIONS_ARRAY = ['담당자', '레이블', '마일스톤'];

function IssueOptionContainer() {
  const theme = useTheme();
  const [showAssgineeDropdown, setShowAssgineeDropdown] = useState(false);
  const [showLabelDropdown, setShowLabelDropdown] = useState(false);
  const [choicedAssgineeIdxArr, setChoicedAssgineeIdxArr] = useState([]);
  const [choicedLabelIdxArr, setChoicedLabelIdxArr] = useState([]);
  const [userList, setUserList] = useState([]);
  const [assigneeList, setAssigneeList] = useState([]);
  const [labelList, setLabelList] = useState([]);
  const [choicedLabelList, setChoicedLabelList] = useState([]);

  useEffect(() => {
    const choicedUserArr = choicedAssgineeIdxArr.map((idx) => userList[idx]);
    setAssigneeList(choicedUserArr);
  }, [choicedAssgineeIdxArr]);

  useEffect(() => {
    const choicedLabelArr = choicedLabelIdxArr.map((idx) => labelList[idx]);
    setChoicedLabelList(choicedLabelArr);
  }, [choicedLabelIdxArr]);

  const handleClickPlusIcon = async (option) => {
    if (option === '담당자') {
      setShowAssgineeDropdown(!showAssgineeDropdown);
      await callUserAPI();
    } else if (option === '레이블') {
      setShowLabelDropdown(!showLabelDropdown);
      await callLabelAPI();
    }
  };

  const handleClickAssignee = (choicedIdxArr, idx) => {
    const newArr = returnNewArr(choicedIdxArr, idx);
    setChoicedAssgineeIdxArr(newArr);
  };

  const handleClickLabel = (choicedIdxArr, idx) => {
    const newArr = returnNewArr(choicedIdxArr, idx);
    setChoicedLabelIdxArr(newArr);
  };

  const handleMouseLeaveAssigneeDropdown = () => setShowAssgineeDropdown(false);
  const handleMouseLeaveLabelDropdown = () => setShowLabelDropdown(false);

  const returnNewArr = (choicedIdxArr, idx) => {
    if (choicedIdxArr.includes(idx)) {
      const copyArr = [...choicedIdxArr];
      const idx = copyArr.findIndex(idx);
      copyArr.splice(idx, 1);
      return copyArr;
    }
    return [...choicedIdxArr, idx];
  };

  const callUserAPI = async () => {
    const result = await api.get('/users');
    if (result.isSuccess) setUserList(result.data.result);
    if (!result.isSuccess) throw new Error(result.message);
  };

  const callLabelAPI = async () => {
    const result = await api.get('/label');
    if (result.isSuccess) setLabelList(result.data.result);
    if (!result.isSuccess) throw new Error(result.message);
  };

  const createDropdown = (option) => {
    if (option === '담당자' && showAssgineeDropdown) {
      return (
        <IssueOptionDropdown
          title={`${option} 추가`}
          onMouseLeave={handleMouseLeaveAssigneeDropdown}
        >
          {createUserListInDropdown()}
        </IssueOptionDropdown>
      );
    } else if (option === '레이블' && showLabelDropdown) {
      return (
        <IssueOptionDropdown title={`${option} 추가`} onMouseLeave={handleMouseLeaveLabelDropdown}>
          {createLabelListInDropdown()}
        </IssueOptionDropdown>
      );
    }
  };

  const createCircleImg = (choicedIdxArr, idx) => {
    return choicedIdxArr.includes(idx) ? <img src={CHECKED_CIRCLE} /> : <img src={CIRCLE} />;
  };

  const createUserListInDropdown = () => {
    return userList.map((item, idx) => (
      <Item key={item._id} onClick={() => handleClickAssignee(choicedAssgineeIdxArr, idx)}>
        <ItemContent>
          <UserImage imageSrc={item.avatar} alt="아바타" />
          <span>{item.name}</span>
        </ItemContent>
        {createCircleImg(choicedAssgineeIdxArr, idx)}
      </Item>
    ));
  };

  const createLabelListInDropdown = () => {
    return labelList.map((item, idx) => (
      <Item key={item._id} onClick={() => handleClickLabel(choicedLabelIdxArr, idx)}>
        <LabelButton info={item} />
        {createCircleImg(choicedAssgineeIdxArr, idx)}
      </Item>
    ));
  };

  const createChoicedItems = (option) => {
    if (option === '담당자') {
      return assigneeList.map((assignee) => {
        return (
          <ChoicedItem key={assignee._id}>
            <ProfileImage imageSrc={assignee.avatar} />
            <span>{assignee.name}</span>
          </ChoicedItem>
        );
      });
    } else if (option === '레이블') {
      return choicedLabelList.map((label) => {
        return (
          <ChoicedItem key={label._id}>
            <LabelButton info={label} />
          </ChoicedItem>
        );
      });
    }
  };

  return (
    <Wrapper theme={theme}>
      {ISSUE_OPTIONS_ARRAY.map((option, idx) => (
        <IssueOptionItem key={idx}>
          <IssueOptionTitle>
            <OptionName>{option}</OptionName>
            <PlusIcon
              src={PLUS}
              alt={`${option} 추가`}
              onClick={() => handleClickPlusIcon(option)}
            />
          </IssueOptionTitle>
          {createChoicedItems(option)}
          {createDropdown(option)}
        </IssueOptionItem>
      ))}
    </Wrapper>
  );
}

export default IssueOptionContainer;

const Wrapper = styled.div`
  width: 308px;
  height: 30%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background-color: white;
  ${allCenterAlign}
  flex-direction: column;
`;

const IssueOptionItem = styled.div`
  width: 93%;
  padding: 32px;
  background-color: white;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:last-child {
    border-bottom: none;
  }
`;

const IssueOptionTitle = styled.div`
  ${seroCenterAlign}
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const ChoicedItem = styled.div`
  ${seroCenterAlign}
  gap:10px;
`;

const OptionName = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const PlusIcon = styled.img`
  cursor: pointer;
`;

const IssueOptionDropdown = styled(Dropdown)`
  left: 10px;
  top: 60px;
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

const ItemContent = styled.div`
  ${seroCenterAlign}
  gap: 5px;
`;

const UserImage = styled(ProfileImage)`
  width: 20px;
  height: 20px;
`;
