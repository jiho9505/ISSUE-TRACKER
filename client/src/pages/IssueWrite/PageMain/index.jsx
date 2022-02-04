import React, { useState } from 'react';
import styled from '@emotion/styled';

import ProfileImage from '@/components/ProfileImage';
import WritingPart from '../WritingPart';
import IssueOptionContainer from '@/components/IssueOptionContainer';
import ButtonContainer from '../ButtonContainer';
import GreyLine from '@/components/GreyLine';

function PageMain() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    images: [],
  });

  const refreshForm = (newState) => {
    setForm({ ...newState, form });
  };
  return (
    <PageMainContainer>
      <ContentContainer>
        <ProfileImage />
        <WritingPart refreshForm={refreshForm} />
        <IssueOptionContainer />
      </ContentContainer>

      <GreyLine />
      <ButtonContainer />
    </PageMainContainer>
  );
}

export default PageMain;

const PageMainContainer = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  gap: 30px;
`;
