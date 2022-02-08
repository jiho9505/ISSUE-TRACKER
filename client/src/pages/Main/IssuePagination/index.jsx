import React from 'react';
import { useRecoilState } from 'recoil';

import Pagination from '@/components/Pagination';

import { useIssueLengthQuery } from '@/hooks/querys/useIssue';
import { paramGetIssueAtom } from '@/store/getIssueParamState';

const PAGINATION_LIMIT = 5;

function IssuePagination() {
  const [paramGetIssue, setParamGetIssue] = useRecoilState(paramGetIssueAtom);

  const issueLength = useIssueLengthQuery(paramGetIssue);
  const issueLengthByStatus =
    paramGetIssue.status === 'open' ? issueLength?.openIssueLength : issueLength?.closeIssueLength;
  const refreshState = (newPage) => setParamGetIssue({ ...paramGetIssue, page: newPage });

  return (
    <div>
      {issueLength && (
        <Pagination
          refreshState={refreshState}
          length={issueLengthByStatus}
          standard={PAGINATION_LIMIT}
        />
      )}
    </div>
  );
}

export default IssuePagination;
