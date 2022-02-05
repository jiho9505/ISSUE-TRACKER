import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import ProfileImage from '@/components/ProfileImage';
import WritingPart from '../WritingPart';
import IssueOptionContainer from '@/components/IssueOptionContainer';
import GreyLine from '@/components/GreyLine';
import CustomButton from '@/components/CustomButton';
import { useNavigate } from '@/core/Router';

import { useUserImageQuery } from '@/hooks/querys/useUser';
import { api } from '@/api/base';
import { toastAtom } from '@/store/toastState';

let timer = 0;
const switchPageTime = 2000;

function PageMain() {
  const theme = useTheme();
  const setToast = useSetRecoilState(toastAtom);
  const navigateTo = useNavigate();
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

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

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

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const body = {
      title,
      comment,
      assignees,
      labels,
    };

    const result = await api.post('/board', body);

    if (result.isSuccess) {
      setToast({
        isActive: true,
        title: '이슈 작성이 되었습니다❗️',
        content: '2초 후 메인페이지로 이동합니다',
        mode: 'success',
      });
      switchPage();
    }
    if (!result.isSuccess) {
      setToast({
        isActive: true,
        title: result.message,
        mode: 'fail',
      });
    }
  };

  const switchPage = () => {
    timer = setTimeout(() => {
      navigateTo('/');
    }, switchPageTime);
  };

  return (
    <Form onSubmit={handleSubmitForm}>
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
          onSubmit={handleSubmitForm}
          type="submit"
        >
          완료
        </CustomButton>
      </ButtonContainer>
    </Form>
  );
}

export default PageMain;

const Form = styled.form``;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
