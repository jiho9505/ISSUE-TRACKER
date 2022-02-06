import React from 'react';
import { useRecoilState } from 'recoil';

import Pagination from '@/components/Pagination';

import { useIssueQuery } from '@/hooks/querys/useIssue';
import { paramGetIssueAtom } from '@/store/getIssueParamState';

const PAGINATION_LIMIT = 5;

function IssuePagination() {
  const [paramGetIssue, setParamGetIssue] = useRecoilState(paramGetIssueAtom);
  const [Issues] = useIssueQuery(paramGetIssue);

  const refreshState = (newPage) => {
    setParamGetIssue({ ...paramGetIssue, page: newPage });
  };
  return (
    <div>
      {Issues && (
        <Pagination
          refreshState={refreshState}
          length={Issues.length}
          standard={PAGINATION_LIMIT}
        />
      )}
    </div>
  );
}

export default IssuePagination;
