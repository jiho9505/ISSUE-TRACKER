import React, { memo, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';

import ProfileImage from '@/components/ProfileImage';
import Dropdown from '@/components/Dropdown';
import Alert from '@/components/Alert';
import WritingComment from '@/components/WritingComment';
import CustomButton from '@/components/CustomButton';
import EditCompletionButton from '../EditCompletionButton';

import { seroCenterAlign, allCenterAlign } from '@/static/style/mixin';
import { WRITE, CANCEL_BLUE } from '@/static/constants/image-path';
import { getTimeMadeIssue } from '@/utils/helper';
import { DELETE, PATCH } from '@/api/base';
import { toastAtom } from '@/store/toastState';

function Comment({ info }) {
  const theme = useTheme();
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [commentText, setCommentText] = useState(info?.content);
  const patchMutation = useMutation((body) => PATCH(`/comment?id=${info?._id}`, body));
  const deleteMutation = useMutation(() => DELETE(`/comment?id=${info?._id}`));
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastAtom);
  const handleMouseLeaveEditDropdown = () => setShowEditDropdown(false);
  const handleClickEditContainer = () => setShowEditDropdown(!showEditDropdown);
  const handleClickEditSpan = () => setIsEditMode(true);
  const handleClickDeleteSpan = () => setIsDeleteMode(true);
  const refreshCommentText = (_, { content }) => setCommentText(content);

  const handleClickEditCancelButton = () => {
    setShowEditDropdown(false);
    setIsEditMode(false);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const body = { content: commentText };
    const result = await patchMutation.mutateAsync(body);

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
      title: '???????????? ???????????? ???????????????.',
      mode: 'success',
    });

    queryClient.invalidateQueries('COMMENT');
    setIsEditMode(false);
    setShowEditDropdown(false);
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
        title: '???????????? ?????????????????????.',
        mode: 'success',
      });

      queryClient.invalidateQueries('COMMENT');
    }
  };

  return (
    <Wrapper theme={theme}>
      <ProfileImage imageSrc={info.avatar} />
      {isEditMode ? (
        <form onSubmit={handleSubmitForm}>
          <WritingComment refreshState={refreshCommentText} value={commentText} />

          <CommentButtonContainer>
            <EditCancelButton sizeLevel={1} theme={theme} onClick={handleClickEditCancelButton}>
              <img src={CANCEL_BLUE} />
              <span>?????? ??????</span>
            </EditCancelButton>
            <EditCompletionButton onSubmit={handleSubmitForm} />
          </CommentButtonContainer>
        </form>
      ) : (
        <Content>
          <Top>
            <TopLeft>
              <Name>{info.writerName}</Name>
              <Time>{getTimeMadeIssue(info.createdAt)}</Time>
            </TopLeft>
            <TopRight>
              {info.issuer && <Writer>?????????</Writer>}
              <Edit>
                <EditContainer onClick={handleClickEditContainer}>
                  <img src={WRITE} />
                  <span>??????</span>
                </EditContainer>

                {showEditDropdown && (
                  <EditDropdown onMouseLeave={handleMouseLeaveEditDropdown}>
                    <DropdownItem onClick={handleClickEditSpan}>????????????</DropdownItem>
                    <DropdownItem onClick={handleClickDeleteSpan}>????????????</DropdownItem>
                  </EditDropdown>
                )}
              </Edit>
            </TopRight>
          </Top>
          <Bottom>
            <span>{info.content}</span>
          </Bottom>
        </Content>
      )}
      {isDeleteMode && <Alert onClick={handleClickAlert} />}
    </Wrapper>
  );
}

export default memo(Comment);

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  width: 880px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
`;

const Top = styled.div`
  background: ${(props) => props.theme.colors.background};
  padding: 16px 24px;
  ${seroCenterAlign}
  justify-content: space-between;
`;

const Bottom = styled.div`
  background: white;
  padding: 16px 24px;
`;

const TopLeft = styled.div`
  ${seroCenterAlign}
  gap: 10px;
`;

const Name = styled.span``;
const Time = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

const TopRight = styled.div`
  ${seroCenterAlign}
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  gap: 15px;
`;

const Writer = styled.div`
  ${allCenterAlign};
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;
  color: ${(props) => props.theme.colors.text};
`;

const Edit = styled.div`
  position: relative;
`;

const EditContainer = styled.div`
  ${seroCenterAlign}
  cursor: pointer;
  gap: 3px;
  img {
    width: 35%;
  }
`;

const EditDropdown = styled(Dropdown)`
  top: 20px;
  left: -30px;
  width: 90px;
`;

const DropdownItem = styled.div`
  padding: 8px;
  ${allCenterAlign}
  cursor: pointer;
  &:last-child {
    border-top: 1px solid ${(props) => props.theme.colors.border};
  }
`;

const CommentButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 10px;
`;

const EditCancelButton = styled(CustomButton)`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.blue};
  span {
    color: ${(props) => props.theme.colors.blue};
  }
`;
