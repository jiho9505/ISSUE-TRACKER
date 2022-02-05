import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { REFRESH, CHECKED_CIRCLE, CIRCLE } from '@/static/constants/image-path';
import { getRandomColor } from '@/utils/helper';
import { seroCenterAlign } from '@/static/style/mixin';
import { CANCEL_BLUE, WRITE_WHITE } from '@/static/constants/image-path';
import { preventXSS } from '@/utils/helper';

const nameMaxLength = 16;
const descMaxLength = 30;

function UpdatorForm({ form, setForm, onSubmit, onClick, isNew }) {
  const theme = useTheme();

  const handleClickRefreshIcon = () => setForm({ ...form, bgColor: getRandomColor() });
  const handleClickDarkColorBtn = () => setForm({ ...form, textColor: 'black' });
  const handleClickLightColorBtn = () => setForm({ ...form, textColor: 'white' });
  const handleChangeName = (e) => {
    const newName = preventXSS(e.currentTarget.value);
    setForm({ ...form, name: newName });
  };
  const handleChangeDescription = (e) => setForm({ ...form, description: e.currentTarget.value });
  const createCheckedCircleIcon = (mode) => {
    if (mode === 'dark') {
      if (form.textColor === 'black') return <img src={CHECKED_CIRCLE} alt="체크" />;
      return <img src={CIRCLE} alt="체크X" />;
    } else if (mode === 'light') {
      if (form.textColor === 'white') return <img src={CHECKED_CIRCLE} alt="체크" />;
      return <img src={CIRCLE} alt="체크X" />;
    }
  };

  const createButtons = () => {
    return (
      <>
        {!isNew && (
          <CancelButton onClick={onClick} sizeLevel={1}>
            <img src={CANCEL_BLUE} />
            <span>취소</span>
          </CancelButton>
        )}
        <CompleteButton
          type="submit"
          onSubmit={onSubmit}
          opacity={form?.name ? '1' : '0.5'}
          sizeLevel={1}
        >
          <img src={WRITE_WHITE} />
          <span>완료</span>
        </CompleteButton>
      </>
    );
  };

  return (
    <Form theme={theme} onSubmit={onSubmit}>
      <InputContainer>
        <CategoryName>레이블 이름</CategoryName>
        <Input
          type="text"
          maxLength={nameMaxLength}
          required
          value={form.name}
          onChange={handleChangeName}
        />
      </InputContainer>
      <InputContainer>
        <CategoryName>설명(선택)</CategoryName>
        <Input
          type="text"
          maxLength={descMaxLength}
          value={form.description}
          onChange={handleChangeDescription}
        />
      </InputContainer>
      <ColorContainer>
        <BgColorContainer>
          <CategoryName>배경 색상</CategoryName>
          <BgColor>
            <ColorCircle bgColor={form.bgColor} />
            <span>{form.bgColor}</span>
            <img src={REFRESH} alt="변경" onClick={handleClickRefreshIcon} />
          </BgColor>
        </BgColorContainer>
        <TextColorContainer>
          <CategoryName>텍스트 색상</CategoryName>
          <TextColorButtonContainer>
            <div onClick={handleClickDarkColorBtn}>
              {createCheckedCircleIcon('dark')}
              <span>어두운 색</span>
            </div>
            <div onClick={handleClickLightColorBtn}>
              {createCheckedCircleIcon('light')}
              <span>밝은 색</span>
            </div>
          </TextColorButtonContainer>
        </TextColorContainer>
      </ColorContainer>
      <ButtonContainer>{createButtons()}</ButtonContainer>
    </Form>
  );
}

export default UpdatorForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 11px;
  gap: 30px;
  position: relative;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const BgColorContainer = styled.div`
  ${seroCenterAlign}
  padding: 0px 24px;
  width: 30%;
  height: 40px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 11px;
  gap: 30px;
  position: relative;
`;

const BgColor = styled.div`
  ${seroCenterAlign}
  position: absolute;
  left: 112px;
  top: 50%-20;
  gap: 15px;
  span {
    font-size: 13px;
  }
  img {
    cursor: pointer;
  }
`;

const ColorCircle = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

const TextColorContainer = styled.div`
  ${seroCenterAlign}
  padding: 0px 24px;
  width: 35%;
  height: 40px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 11px;
  gap: 30px;
`;

const TextColorButtonContainer = styled.div`
  ${seroCenterAlign}
  gap: 20px;

  div {
    ${seroCenterAlign}
    gap: 5px;
    font-size: 13px;
    cursor: pointer;
  }
`;

const CategoryName = styled.label`
  font-size: 12px;
  line-height: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.colors.input};
  position: absolute;
  left: 112px;
  top: 0px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 32px;
  right: 32px;
`;

const CancelButton = styled(CustomButton)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const CompleteButton = styled(CustomButton)``;
