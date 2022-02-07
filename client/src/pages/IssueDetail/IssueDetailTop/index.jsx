import React from 'react';
import styled from '@emotion/styled';

import IssueDetailTopUp from '../IssueDetailTopUp';
import IssueDetailTopDown from '../IssueDetailTopDown';

function IssueDetailTop() {
  return (
    <IssueDetailTopContainer>
      <IssueDetailTopUp />
      <IssueDetailTopDown />
    </IssueDetailTopContainer>
  );
}

export default IssueDetailTop;

const IssueDetailTopContainer = styled.div``;
