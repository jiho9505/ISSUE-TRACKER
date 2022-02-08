import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

import ProfileImage from '@/components/ProfileImage';
import Dropdown from '@/components/Dropdown';

import { seroCenterAlign, allCenterAlign } from '@/static/style/mixin';
import { WRITE } from '@/static/constants/image-path';
import { getTimeMadeIssue } from '@/utils/helper';

function Comment({ info }) {
  const theme = useTheme();

  return (
    <Wrapper theme={theme}>
      <ProfileImage imageSrc={info.avatar} />
      <Content>
        <Top>
          <TopLeft>
            <Name>{info.writerName}</Name>
            <Time>{getTimeMadeIssue(info.createdAt)}</Time>
          </TopLeft>
          <TopRight>
            {info.issuer && <Writer>작성자</Writer>}
            <Edit>
              <img src={WRITE} />
              <span>편집</span>
              <EditDropdown>
                <DropdownItem>수정하기</DropdownItem>
                <DropdownItem>삭제하기</DropdownItem>
              </EditDropdown>
            </Edit>
          </TopRight>
        </Top>
        <Bottom>
          <span>{info.content}</span>
        </Bottom>
      </Content>
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
  ${seroCenterAlign}
  cursor: pointer;
  gap: 3px;
  img {
    width: 35%;
  }
  position: relative;
`;

const EditDropdown = styled(Dropdown)`
  top: 20px;
  left: -30px;
  width: 90px;
`;

const DropdownItem = styled.div`
  padding: 8px;
  ${allCenterAlign}

  &:last-child {
    border-top: 1px solid ${(props) => props.theme.colors.border};
  }
`;
