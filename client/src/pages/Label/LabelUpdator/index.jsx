import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

import LabelButton from '@/components/LabelButton';
import UpdatorForm from '../UpdatorForm';

import { allCenterAlign, seroCenterAlign } from '@/static/style/mixin';
import { getRandomColor } from '@/utils/helper';
import { POST, PATCH } from '@/api/base';
import { toastAtom } from '@/store/toastState';

function LabelUpdator({ isNew = false, className, init, onClick, setActiveBtn }) {
  const theme = useTheme();
  const [form, setForm] = useState({
    name: init ? init.name : '',
    description: init ? init.description : '',
    bgColor: init ? init.bgColor : getRandomColor(),
    textColor: init ? init.textColor : 'black',
  });
  const postMutation = useMutation((newLabel) => POST('/label', newLabel));
  const patchMutation = useMutation((newLabel) => PATCH(`/label?id=${init._id}`, newLabel));

  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastAtom);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const result = isNew
      ? await postMutation.mutateAsync(form)
      : await patchMutation.mutateAsync(form);

    if (!result.data.success) {
      setToast({
        isActive: true,
        title: result.data.message,
        mode: 'fail',
      });
      return;
    }

    setToast({
      isActive: true,
      title: isNew ? '레이블을 생성하였습니다.' : '레이블을 업데이트 하였습니다.',
      mode: 'success',
    });

    queryClient.invalidateQueries('LABEL');
    setActiveBtn(false);
  };

  const createTitle = () => {
    return isNew ? <Title>새로운 레이블 추가</Title> : <Title>레이블 편집</Title>;
  };

  return (
    <LabelUpdatorContainer className={className} theme={theme}>
      <TitleContainer>{createTitle()}</TitleContainer>
      <Main>
        <MainLeft>
          <LabelButton info={form} />
        </MainLeft>
        <MainRight>
          <UpdatorForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmitForm}
            onClick={onClick}
            isNew={isNew}
          />
        </MainRight>
      </Main>
    </LabelUpdatorContainer>
  );
}

export default LabelUpdator;

const LabelUpdatorContainer = styled.div`
  width: 100%;
  height: 345px;
  background: white;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 32px;
  position: relative;
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 32px;
  top: 32px;
`;

const Title = styled.span`
  font-size: 24px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const MainLeft = styled.div`
  width: 20%;
  height: 100%;
  ${allCenterAlign}
`;

const MainRight = styled.div`
  width: 75%;
  height: 100%;
  ${seroCenterAlign}
  justify-content: flex-end;
`;
