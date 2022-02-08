import React from 'react';
import styled from '@emotion/styled';

import ModalPortal from '@/utils/portal';

function Alert({ onClick }) {
  return (
    <ModalPortal>
      <AlertContainer onClick={onClick}>
        <div className="alert__overlay"></div>
        <div className="alert__content">
          <span className="alert__guide">정말로 삭제하시겠습니까?</span>
          <div className="alert__checkOne">
            <span className="alert__cancel">취소</span>
            <span className="alert__delete">삭제</span>
          </div>
        </div>
      </AlertContainer>
    </ModalPortal>
  );
}

export default Alert;

const AlertContainer = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .alert__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    width: 308px;
    height: 108px;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    padding: 16px 20px;
    font-size: 20px;
  }

  .alert__overlay {
    width: 100%;
    height: 100%;
  }

  .alert__guide {
    font-size: 20px;
    line-height: 20px;
  }

  .alert__checkOne {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .alert__cancel {
    cursor: pointer;
  }

  .alert__delete {
    cursor: pointer;
    color: red;
  }
`;
