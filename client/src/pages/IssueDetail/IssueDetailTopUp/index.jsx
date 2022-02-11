import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';

import Loader from '@/components/Loader';
import TitleEditorButton from '../TitleEditorButton';
import IssueToggleButton from '../IssueToggleButton';
import EditCompletionButton from '../EditCompletionButton';
import PageTitle from '../PageTitle';

import { seroCenterAlign } from '@/static/style/mixin';
import { useIssueDetailQuery } from '@/hooks/querys/useIssue';
import { getRouterParams } from '@/utils/helper';
import { PATCH } from '@/api/base';
import { toastAtom } from '@/store/toastState';

function IssueDetailTopUp() {
  const issueId = getRouterParams();
  const [issueDetail, isLoading] = useIssueDetailQuery(issueId);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const patchTitleMutation = useMutation((newTitle) =>
    PATCH(`/issue?id=${issueId}`, { title: newTitle })
  );
  const patchIssueStatusMutation = useMutation((status) =>
    PATCH(`/issue?id=${issueId}`, { isOpen: status })
  );
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastAtom);

  useEffect(() => {
    setNewTitle(issueDetail?.title);
  }, [issueDetail]);

  const handleClickCompletion = async (e) => {
    e.preventDefault();

    const result = await patchTitleMutation.mutateAsync(newTitle);
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
      title: '제목이 변경 되었습니다.',
      mode: 'success',
    });
    setIsEditTitle(false);

    queryClient.invalidateQueries(['ISSUE']);
  };

  const handleClickIssueToggle = async (e) => {
    const result = await patchIssueStatusMutation.mutateAsync(!issueDetail.isOpen);
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
      title: '이슈 상태가 변경 되었습니다.',
      mode: 'success',
    });

    queryClient.invalidateQueries(['ISSUE']);
  };

  return (
    <UpPart onSubmit={handleClickCompletion}>
      <PageTitle
        info={issueDetail?.title}
        isEditTitle={isEditTitle}
        newTitle={newTitle}
        refreshState={setNewTitle}
      />
      <ButtonContainer>
        <TitleEditorButton isEditTitle={isEditTitle} setIsEditTitle={setIsEditTitle} />
        {isEditTitle ? (
          <EditCompletionButton onSubmit={handleClickCompletion} />
        ) : (
          <IssueToggleButton onClick={handleClickIssueToggle} status={issueDetail?.isOpen} />
        )}
      </ButtonContainer>
    </UpPart>
  );
}

export default IssueDetailTopUp;

const UpPart = styled.form`
  ${seroCenterAlign}
  justify-content: space-between;
  margin-top: 60px;
`;

const ButtonContainer = styled.div`
  ${seroCenterAlign}
  gap: 10px;
`;
