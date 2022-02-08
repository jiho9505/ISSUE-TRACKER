import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import ProfileImage from '@/components/ProfileImage';
import LabelButton from '@/components/LabelButton';

import { EXCLAMATION_MARK_BLUE, GUIDE, BOX } from '@/static/constants/image-path';
import { seroCenterAlign } from '@/static/style/mixin';
import { getTimeMadeIssue } from '@/utils/helper';
import { useNavigate } from '@/core/Router';

function Issue({ info }) {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const handleClickTitle = () => navigateTo(`/issue/${info.issue._id}`);

  return (
    <IssueContainer color={theme.colors.border}>
      <IssueContent>
        <IssueContentTop>
          {info && info.issue.isOpen ? <img src={EXCLAMATION_MARK_BLUE} /> : <img src={BOX} />}
          <IssueTitle onClick={handleClickTitle}>{info?.issue.title}</IssueTitle>
          {info?.labels.map((label) => (
            <LabelButton info={label} key={label._id} />
          ))}
        </IssueContentTop>
        <IssueContentBottom color={theme.colors.text}>
          <img src={GUIDE} />
          <span>
            이 이슈가 {info && getTimeMadeIssue(info.issue.createdAt)}, {info?.issue.writerName}님에
            의해 작성되었습니다
          </span>
        </IssueContentBottom>
      </IssueContent>
      <AssigneeContainer>
        {info?.assignees.map((assignee) => (
          <AssigneeImage imageSrc={assignee.avatar} key={assignee._id} />
        ))}
      </AssigneeContainer>
    </IssueContainer>
  );
}

export default Issue;

const IssueContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 100px;
  border-top: 1px solid ${(props) => props.color};
  padding: 21px 30px;
  gap: 30px;
`;

const IssueContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IssueContentTop = styled.div`
  ${seroCenterAlign}
  gap: 9px;
`;

const IssueTitle = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const Label = styled.div`
  border-radius: 30px;
  background-color: blue;
  color: white;
  padding: 8px 12px;
  font-size: 12px;
`;

const IssueContentBottom = styled.div`
  ${seroCenterAlign}
  gap: 10px;
  color: ${(props) => props.color};
`;

const AssigneeContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AssigneeImage = styled(ProfileImage)`
  width: 20px;
  height: 20px;
`;
