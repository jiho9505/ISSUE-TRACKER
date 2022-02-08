import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useMutation, useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

import ProfileImage from '@/components/ProfileImage';
import WritingComment from '@/components/WritingComment';
import IssueOptionContainer from '@/components/IssueOptionContainer';
import Comment from '../Comment';
import Loader from '@/components/Loader';
import CustomButton from '@/components/CustomButton';
import Alert from '@/components/Alert';

import { useUserImageQuery } from '@/hooks/querys/useUser';
import { useCommentQuery } from '@/hooks/querys/useComment';
import { getRouterParams } from '@/utils/helper';
import { PLUS_WHITE, TRASH } from '@/static/constants/image-path';
import { POST, DELETE } from '@/api/base';
import { toastAtom } from '@/store/toastState';
import { seroCenterAlign } from '@/static/style/mixin';
import { useNavigate } from '@/core/Router';

let timer = 0;
const disableOpacity = 0.5;
const enableOpacity = 1;
const switchPageTime = 2000;

function IssueDetailMain() {
  const navigateTo = useNavigate();
  const theme = useTheme();
  const issueId = getRouterParams();
  const [comments, isLoading] = useCommentQuery(issueId);
  const userImage = useUserImageQuery();
  const [commentText, setCommentText] = useState('');
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [opacity, setOpacity] = useState(disableOpacity);
  const postMutation = useMutation((body) => POST('/comment', body));
  const deleteMutation = useMutation(() => DELETE(`/issue?id=${issueId}`));
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastAtom);

  useEffect(() => {
    commentText ? setOpacity(enableOpacity) : setOpacity(disableOpacity);
  }, [commentText]);

  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const handleClickDeleteIssueButton = () => setIsDeleteMode(true);
  const refreshState = (_, { content }) => setCommentText(content);
  const handleClickCommentButtonBtn = async () => {
    const body = { issueId, content: commentText };
    const result = await postMutation.mutateAsync(body);

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
      title: '코멘트를 생성하였습니다.',
      mode: 'success',
    });

    queryClient.invalidateQueries('COMMENT');
    setCommentText('');
  };
  const handleClickAlert = async (e) => {
    if (['alert__overlay', 'alert__cancel'].includes(e.target.className)) setIsDeleteMode(false);
    if (e.target.className === 'alert__delete') {
      setIsDeleteMode(false);
      const result = await deleteMutation.mutateAsync();

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
        title: '이슈를 삭제하였습니다.',
        content: '2초 후 메인페이지로 이동합니다',
        mode: 'success',
      });
      switchPage();
    }
  };

  const switchPage = () => {
    timer = setTimeout(() => {
      navigateTo('/main');
    }, switchPageTime);
  };
  if (isLoading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  return (
    <IssueDetailMainContainer theme={theme}>
      <CommentContainer>
        {comments?.map((comment) => (
          <Comment info={comment} />
        ))}

        <WritingPart>
          <ProfileImage imageSrc={userImage} />
          <WritingComment refreshState={refreshState} value={commentText} />
        </WritingPart>
        <CommentButtonContainer>
          <CommentButton
            onClick={handleClickCommentButtonBtn}
            sizeLevel={1}
            bgColor={theme.colors.blue}
            opacity={opacity}
          >
            <img src={PLUS_WHITE} alt="이슈 작성 아이콘" />
            코멘트 작성
          </CommentButton>
        </CommentButtonContainer>
      </CommentContainer>
      <RightContainer>
        <IssueOptionContainer />
        <DeleteIssueButton onClick={handleClickDeleteIssueButton}>
          <img src={TRASH} />
          <span>이슈 삭제</span>
        </DeleteIssueButton>
      </RightContainer>
      {isDeleteMode && <Alert onClick={handleClickAlert} />}
    </IssueDetailMainContainer>
  );
}

export default IssueDetailMain;

const IssueDetailMainContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WritingPart = styled.div`
  display: flex;
  gap: 20px;
`;

const CommentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CommentButton = styled(CustomButton)`
  width: 140px;
`;

const RightContainer = styled.div`
  height: 100%;
`;

const DeleteIssueButton = styled.div`
  ${seroCenterAlign}
  gap: 5px;
  width: 90%;
  margin-top: 20px;
  justify-content: flex-end;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
