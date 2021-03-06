import React from 'react';
import styled from '@emotion/styled';

import { CLIP } from '@/static/constants/image-path';

function AddingFile() {
  return (
    <AddingFileContainer>
      <label htmlFor="file-id">
        <img src={CLIP} alt="파일 첨부" />
        <span>파일 첨부하기 [Coming Soon] </span>
      </label>
      <input type="file" id="file-id" disabled />
    </AddingFileContainer>
  );
}

export default AddingFile;

const AddingFileContainer = styled.div`
  padding: 12px 20px;

  label {
    display: flex;
    align-items: center;
    gap: 7px;
    /* cursor: pointer; */
  }

  span {
    font-size: 0.75rem;
    color: #6e7191;
  }
`;
