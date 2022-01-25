import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import CustomButton from '@/components/CustomButton';

import { TAG, GUIDE } from '@/static/constants/image-path';

function IssueSideButton() {
  const theme = useTheme();

  return (
    <IssueSideButtonContainer>
      <LabelButton
        borderColor={theme.colors.border}
        sizeLevel={1}
        bgColor={theme.colors.background}
        color={theme.colors.text}
      >
        <span>
          <img src={TAG} />
          레이블 (3)
        </span>
      </LabelButton>
      <MileStoneButton
        borderColor={theme.colors.border}
        sizeLevel={1}
        bgColor={theme.colors.background}
        color={theme.colors.text}
      >
        <span>
          <img src={GUIDE} />
          마일스톤 (2)
        </span>
      </MileStoneButton>
    </IssueSideButtonContainer>
  );
}

export default IssueSideButton;

const IssueSideButtonContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

const LabelButton = styled(CustomButton)`
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border: 1px solid ${(props) => props.borderColor};
`;

const MileStoneButton = styled(CustomButton)`
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border: 1px solid ${(props) => props.borderColor};
`;
