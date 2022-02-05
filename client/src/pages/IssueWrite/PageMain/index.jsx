import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import ProfileImage from '@/components/ProfileImage';
import WritingPart from '../WritingPart';
import IssueOptionContainer from '@/components/IssueOptionContainer';
import GreyLine from '@/components/GreyLine';
import CustomButton from '@/components/CustomButton';

import { useUserImageQuery } from '@/hooks/querys/useUser';

function PageMain() {
  const theme = useTheme();
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState({
    content: '',
    images: [],
  });
  const [assignees, setAssignees] = useState([]);
  const [labels, setLabels] = useState([]);
  const [isFilledForm, setisFilledForm] = useState(false);
  const imageSrc = useUserImageQuery();

  useEffect(() => {
    if (title.length > 0 && comment.content.length > 0) {
      setisFilledForm(true);
      return;
    }
    setisFilledForm(false);
  }, [title, comment]);

  const refreshState = (key, newState) => {
    switch (key) {
      case 'TITLE':
        setTitle(newState);
        break;
      case 'COMMENT':
        setComment({ ...comment, ...newState });
        break;
      case 'ASSIGNEE':
        setAssignees(newState);
        break;
      case 'LABEL':
        setLabels(newState);
        break;
      default:
        break;
    }
  };

  return (
    <PageMainContainer>
      <ContentContainer>
        <ProfileImage imageSrc={imageSrc} />
        <WritingPart refreshState={refreshState} />
        <IssueOptionContainer refreshState={refreshState} />
      </ContentContainer>

      <GreyLine />
      <ButtonContainer isFilledForm={isFilledForm}>
        <CustomButton
          opacity={isFilledForm ? '1' : '0.5'}
          sizeLevel={2}
          bgColor={theme.colors.blue}
        >
          완료
        </CustomButton>
      </ButtonContainer>
    </PageMainContainer>
  );
}

export default PageMain;

const PageMainContainer = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
