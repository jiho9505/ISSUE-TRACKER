import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import LabelButton from '@/components/LabelButton';
import LabelUpdator from '../LabelUpdator';
import Alert from '@/components/Alert';

import { seroCenterAlign } from '@/static/style/mixin';
import { TRASH, WRITE } from '@/static/constants/image-path';

function LabelItem({ label }) {
  const theme = useTheme();

  const [isActiveUpdator, setIsActiveUpdator] = useState(false);
  const [isClickDeleteBtn, setIsClickDeleteBtn] = useState(false);

  const handleClickUpdateIcon = () => setIsActiveUpdator(!isActiveUpdator);
  const handleClickDeleteIcon = () => setIsClickDeleteBtn(true);
  const handleClickCancelBtn = () => setIsActiveUpdator(false);

  const handleClickAlert = (e) => {
    if (['alert__overlay', 'alert__cancel'].includes(e.target.className))
      setIsClickDeleteBtn(false);
    if (e.target.className === 'alert__delete') {
      setIsClickDeleteBtn(false);
      // http
    }
  };

  return (
    <>
      <LabelItemContainer theme={theme}>
        <LabelButton info={label} />
        <LabelDescription>{label.description}</LabelDescription>
        <LabelOptionContainer>
          <LabelUpdateIcon onClick={handleClickUpdateIcon}>
            <img src={WRITE} alt="편집" />
            편집
          </LabelUpdateIcon>
          <LabelDeleteIcon onClick={handleClickDeleteIcon}>
            <img src={TRASH} alt="삭제" />
            삭제
          </LabelDeleteIcon>
        </LabelOptionContainer>
      </LabelItemContainer>
      {isActiveUpdator && (
        <LabelUpdator
          init={label}
          onClick={handleClickCancelBtn}
          setActiveBtn={setIsActiveUpdator}
        />
      )}
      {isClickDeleteBtn && <Alert onClick={handleClickAlert} />}
    </>
  );
}

export default LabelItem;

const LabelItemContainer = styled.div`
  ${seroCenterAlign}
  width: 100%;
  height: 100px;
  background: white;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 32px;
  position: relative;
  justify-content: space-between;
`;

const LabelDescription = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  width: 800px;
  height: 28px;
  left: 240px;
  top: 36px;
`;

const LabelOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const LabelUpdateIcon = styled.span`
  ${seroCenterAlign}
  gap: 5px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const LabelDeleteIcon = styled.span`
  ${seroCenterAlign}
  gap: 5px;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
`;
