import React from 'react';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { TAG, GUIDE } from '@/static/constants/image-path';
import { useNavigate } from '@/core/Router';
import { useLabelLengthQuery } from '@/hooks/querys/useLabel';

function IssueOptionButtons({ choice = '' }) {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const labelLength = useLabelLengthQuery();

  const handleClickButton = () => navigateTo('/label');
  const handleClickMileStoneButton = () => navigateTo('/milestone');

  return (
    <IssueOptionButtonsContainer>
      <LabelButton
        borderColor={theme.colors.border}
        sizeLevel={1}
        onClick={handleClickButton}
        theme={theme}
        choice={choice}
      >
        <span>
          <img src={TAG} />
          레이블 ({labelLength})
        </span>
      </LabelButton>
      <MileStoneButton
        borderColor={theme.colors.border}
        sizeLevel={1}
        onClick={handleClickMileStoneButton}
        theme={theme}
        choice={choice}
      >
        <span>
          <img src={GUIDE} />
          마일스톤 (0)
        </span>
      </MileStoneButton>
    </IssueOptionButtonsContainer>
  );
}

export default IssueOptionButtons;

const IssueOptionButtonsContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

const LabelButton = styled(CustomButton)`
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  width: 140px;
  span {
    color: ${(props) => props.theme.colors.text};
  }
  ${() => getChoicedLabelCss}
`;

const MileStoneButton = styled(CustomButton)`
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  width: 140px;
  span {
    color: ${(props) => props.theme.colors.text};
  }
  ${() => getChoicedMileStoneCss}
`;

const getChoicedLabelCss = ({ choice }) => {
  if (choice === 'label') {
    return css`
      background: #d9dbe9;
    `;
  }
};

const getChoicedMileStoneCss = ({ choice }) => {
  if (choice === 'milestone') {
    return css`
      background: #d9dbe9;
    `;
  }
};
