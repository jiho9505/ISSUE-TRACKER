import React, { useState, useEffect } from 'react';
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
  const [isFilledForm, setisFilledForm] = useState(false);

  useEffect(() => {
    if (form.title.length > 0 && form.description.length > 0) {
      setisFilledForm(true);
      return;
    }
    setisFilledForm(false);
  }, [form]);

  const refreshForm = (newState) => {
    setForm({ ...form, ...newState });
  };
  return (
    <PageMainContainer>
      <ContentContainer>
        <ProfileImage />
        <WritingPart refreshForm={refreshForm} />
        <IssueOptionContainer />
      </ContentContainer>

      <GreyLine />
      <ButtonContainer isFilledForm={isFilledForm} />
    </PageMainContainer>
  );
}

export default PageMain;

const PageMainContainer = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;
