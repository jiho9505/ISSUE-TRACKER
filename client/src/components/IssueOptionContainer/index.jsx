import React, { memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import Dropdown from '../Dropdown';
import ProfileImage from '../ProfileImage';
import LabelButton from '../LabelButton';

import { api } from '@/api/base';
import { seroCenterAlign, allCenterAlign } from '@/static/style/mixin';
import { CHECKED_CIRCLE, CIRCLE, PLUS } from '@/static/constants/image-path';
import { toastAtom } from '@/store/toastState';
import { getRouterParams } from '@/utils/helper';

const ISSUE_OPTIONS_ARRAY = ['담당자', '레이블', '마일스톤'];
const ASSIGNEE_MAX_LENGTH = 5;
const LABEL_MAX_LENGTH = 3;
const ASSIGNEE_KEY = 'ASSIGNEE';
const LABEL_KEY = 'LABEL_KEY';

function IssueOptionContainer({ refreshState, className, mode = '' }) {
  const theme = useTheme();
  const setToast = useSetRecoilState(toastAtom);
  const [showAssgineeDropdown, setShowAssgineeDropdown] = useState(false);
  const [showLabelDropdown, setShowLabelDropdown] = useState(false);
  const [choicedAssgineeIdxArr, setChoicedAssgineeIdxArr] = useState([]);
  const [choicedLabelIdxArr, setChoicedLabelIdxArr] = useState([]);
  const [userList, setUserList] = useState([]);
  const [assigneeList, setAssigneeList] = useState([]);
  const [labelList, setLabelList] = useState([]);
  const [choicedLabelList, setChoicedLabelList] = useState([]);
  const issueId = getRouterParams();

  const [choicedUserIDArr, setChoicedUserIDArr] = useState([]);
  const [choicedLabelIDArr, setChoicedLabelIDArr] = useState([]);

  useEffect(() => {
    callUserAPI();
    callLabelAPI();
    mode === 'EDIT' && callAPIAboutEditMode();
  }, []);

  const callAPIAboutEditMode = async () => {
    const [assigneeResult, issueLabelResult] = await Promise.all([
      api.get(`/assignee/about-issue?issueId=${issueId}`),
      api.get(`/issue-label/about-issue?issueId=${issueId}`),
    ]);
    if (!assigneeResult.isSuccess) throw new Error(assigneeResult.message);
    if (!issueLabelResult.isSuccess) throw new Error(issueLabelResult.message);
    const initAssigneeIdx = assigneeResult.data.result.map((assignee) => assignee.idx);
    const initIssueLabelIdx = issueLabelResult.data.result.map((issueLabel) => issueLabel.idx);
    setChoicedAssgineeIdxArr(initAssigneeIdx);
    setChoicedLabelIdxArr(initIssueLabelIdx);
  };

  useEffect(() => {
    if (refreshState) {
      const choicedUserArr = choicedAssgineeIdxArr.map((idx) => userList[idx]);
      const choicedUserIDArr = choicedAssgineeIdxArr.map((idx) => userList[idx]._id);
      setAssigneeList(choicedUserArr);
      setChoicedUserIDArr(choicedUserIDArr);
      refreshState('ASSIGNEE', choicedUserIDArr);
    }
  }, [choicedAssgineeIdxArr]);

  useEffect(() => {
    if (refreshState) {
      const choicedLabelArr = choicedLabelIdxArr.map((idx) => labelList[idx]);
      const choicedLabelIDArr = choicedLabelIdxArr.map((idx) => labelList[idx]._id);
      setChoicedLabelList(choicedLabelArr);
      setChoicedLabelIDArr(choicedLabelIDArr);
      refreshState('LABEL', choicedLabelIDArr);
    }
  }, [choicedLabelIdxArr]);

  const handleClickPlusIcon = async (option) => {
    if (option === '담당자') {
      setShowAssgineeDropdown(!showAssgineeDropdown);
    } else if (option === '레이블') {
      setShowLabelDropdown(!showLabelDropdown);
    }
  };

  const handleClickAssignee = (choicedIdxArr, idx) => {
    const newArr = returnNewArr(choicedIdxArr, idx, ASSIGNEE_KEY);
    setChoicedAssgineeIdxArr(newArr);
  };

  const handleClickLabel = (choicedIdxArr, idx) => {
    const newArr = returnNewArr(choicedIdxArr, idx, LABEL_KEY);
    setChoicedLabelIdxArr(newArr);
  };

  const handleMouseLeaveAssigneeDropdown = () => setShowAssgineeDropdown(false);
  const handleMouseLeaveLabelDropdown = () => setShowLabelDropdown(false);

  const handleClickUpdateButton = async () => {
    const [assigneeResult, issueLabelResult] = await Promise.all([
      api.post(`/assignee`, { data: choicedUserIDArr, issueId }),
      api.post(`/issue-label`, { data: choicedLabelIDArr, issueId }),
    ]);
    if (!assigneeResult.isSuccess) throw new Error(assigneeResult.message);
    if (!issueLabelResult.isSuccess) throw new Error(issueLabelResult.message);

    if (assigneeResult.isSuccess && issueLabelResult.isSuccess) {
      setToast({
        isActive: true,
        title: '옵션이 업데이트 되었습니다❗️',
        mode: 'success',
      });
      callUserAPI();
      callLabelAPI();
      callAPIAboutEditMode();
    }
  };

  const returnNewArr = (choicedIdxArr, idx, key) => {
    if (choicedIdxArr.includes(idx)) {
      const copyArr = [...choicedIdxArr];
      const idxToRemove = copyArr.findIndex((ele) => ele === idx);
      copyArr.splice(idxToRemove, 1);
      return copyArr;
    }
    if (
      (key === ASSIGNEE_KEY && choicedIdxArr.length === ASSIGNEE_MAX_LENGTH) ||
      (key === LABEL_KEY && choicedIdxArr.length === LABEL_MAX_LENGTH)
    ) {
      setToast({
        isActive: true,
        title: '더 이상 추가할 수 없습니다❗️',
        mode: 'fail',
      });
      return choicedIdxArr;
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
        <CursorLabelButton info={item} />
        {createCircleImg(choicedLabelIdxArr, idx)}
      </Item>
    ));
  };

  const createChoicedItems = (option) => {
    if (option === '담당자') {
      return assigneeList.map((assignee) => {
        return (
          <ChoicedItem key={assignee._id}>
            <ProfileImage imageSrc={assignee.avatar} />
            <AssigneeName>{assignee.name}</AssigneeName>
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
    <Wrapper theme={theme} className={className}>
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
      {mode === 'EDIT' && (
        <UpdateButton onClick={handleClickUpdateButton}>옵션 업데이트</UpdateButton>
      )}
    </Wrapper>
  );
}

export default memo(IssueOptionContainer);

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
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:first-of-type {
    border-top: none;
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

const AssigneeName = styled.span`
  color: ${({ theme }) => theme.colors.text};
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

const CursorLabelButton = styled(LabelButton)`
  cursor: pointer;
`;

const UpdateButton = styled.div`
  ${seroCenterAlign}
  justify-content: center;
  background-color: white;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.lightPurple};
  color: white;
  height: 50px;
  width: 100%;
  cursor: pointer;
  border-radius: 0px 0px 16px 16px;
`;
