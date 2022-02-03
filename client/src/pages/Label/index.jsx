import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import Header from '@/components/Header';
import LabelUpdator from './LabelUpdator';
import LabelContent from './LabelContent';
import LabelTop from './LabelTop';

import { defaultPageFrame } from '@/static/style/mixin';

function Label() {
  const theme = useTheme();
  const [isActiveAddBtn, setIsActiveAddBtn] = useState(false);

  const handleClickAddBtn = () => setIsActiveAddBtn(!isActiveAddBtn);

  return (
    <LabelContainer theme={theme}>
      <Header />
      <LabelTop onClick={handleClickAddBtn} isActiveAddBtn={isActiveAddBtn} />
      {isActiveAddBtn && <NewLabelUpdator isNew={true} setActiveBtn={setIsActiveAddBtn} />}
      <LabelContent />
    </LabelContainer>
  );
}

export default Label;

const LabelContainer = styled.div`
  ${defaultPageFrame}
`;

const NewLabelUpdator = styled(LabelUpdator)`
  margin-top: 50px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
