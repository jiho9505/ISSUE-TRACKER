import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { toastAtom } from '@/store/atoms';
import ModalPortal from '@/utils/portal';

let timer = 0;
const animationTime = 2000;
const defaultToastValue = { isActive: false, title: '', content: '', mode: 'fail' };
/**
 * @param mode = 'success' | 'fail' | 'caution'
 */
const Message = () => {
  const [toast, setToast] = useRecoilState(toastAtom);
  useEffect(() => {
    if (toast.isActive) {
      timer = setTimeout(() => {
        setToast(defaultToastValue);
      }, animationTime);
    }
    return () => clearTimeout(timer);
  }, [toast]);

  const createIcon = () => {
    switch (toast.mode) {
      case 'success':
        return (
          <SuccessContainer>
            <i className="fas fa-check-circle"></i>
          </SuccessContainer>
        );
      case 'fail':
        return (
          <FailContainer>
            <i className="fas fa-exclamation-circle"></i>
          </FailContainer>
        );
      case 'caution':
        return (
          <CautionContainer>
            <i className="fas fa-exclamation-triangle"></i>
          </CautionContainer>
        );
      default:
        return '';
    }
  };
  return (
    toast.isActive && (
      <ModalPortal>
        <WholeContainer>
          <MessageContainer>
            <Text>
              {createIcon()}
              {toast.title}
            </Text>
            <Content>{toast.content}</Content>
          </MessageContainer>
        </WholeContainer>
      </ModalPortal>
    )
  );
};

export default Message;

const showMessage = keyframes`
  from {
    transform: translateY(-10%);
  }
  80%{
    transform: translateY(5%);
  }
  100% {
    transform: translateY(-15%);
  }
`;

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  animation: ${showMessage} ${animationTime}ms ease;
  transform: translateY(-35%);
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  max-height: 80px;
  padding: 15px 20px;
  min-width: 430px;
  background: #f6f6f6;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  font-size: 1rem;
`;

const SuccessContainer = styled.div`
  i {
    margin-right: 10px;
    color: #12db47;
  }
`;

const FailContainer = styled.div`
  i {
    margin-right: 10px;
    color: #f56342;
  }
`;

const CautionContainer = styled.div`
  i {
    margin-right: 10px;
    color: #fcf003;
  }
`;
