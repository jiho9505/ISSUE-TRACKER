import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';

import ProfileImage from '@/components/ProfileImage';
import Dropdown from '@/components/Dropdown';
import Alert from '@/components/Alert';
import WritingComment from '@/components/WritingComment';

import { seroCenterAlign, allCenterAlign } from '@/static/style/mixin';
import { WRITE } from '@/static/constants/image-path';
import { getTimeMadeIssue } from '@/utils/helper';
import { DELETE } from '@/api/base';
import { toastAtom } from '@/store/toastState';

function Comment({ info }) {
  const theme = useTheme();
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const deleteMutation = useMutation(() => DELETE(`/comment?id=${info?._id}`));
  const queryClient = useQueryClient();
  const setToast = useSetRecoilState(toastAtom);

  const handleMouseLeaveEditDropdown = () => setShowEditDropdown(false);
  const handleClickEditContainer = () => setShowEditDropdown(!showEditDropdown);
  const handleClickEditSpan = () => setIsEditMode(true);
  const handleClickDeleteSpan = () => setIsDeleteMode(true);

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
        title: '코멘트를 삭제하였습니다.',
        mode: 'success',
      });

      queryClient.invalidateQueries('COMMENT');
    }
  };

  return (
    <Wrapper theme={theme}>
      <ProfileImage imageSrc={info.avatar} />
      {isEditMode ? (
        <WritingComment />
      ) : (
        <Content>
          <Top>
            <TopLeft>
              <Name>{info.writerName}</Name>
              <Time>{getTimeMadeIssue(info.createdAt)}</Time>
            </TopLeft>
            <TopRight>
              {info.issuer && <Writer>작성자</Writer>}
              <Edit>
                <EditContainer onClick={handleClickEditContainer}>
                  <img src={WRITE} />
                  <span>편집</span>
                </EditContainer>

                {showEditDropdown && (
                  <EditDropdown onMouseLeave={handleMouseLeaveEditDropdown}>
                    <DropdownItem onClick={handleClickEditSpan}>수정하기</DropdownItem>
                    <DropdownItem onClick={handleClickDeleteSpan}>삭제하기</DropdownItem>
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

export default Comment;

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
