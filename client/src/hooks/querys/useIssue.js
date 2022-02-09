import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const ISSUE_REFETCH = 1000 * 60 * 5;

export const useIssueQuery = (paramGetIssue) => {
  const status = paramGetIssue.status;
  const filter = paramGetIssue.filter;
  const page = paramGetIssue.page;

  const { data, isLoading } = useQuery(
    ['ISSUE', paramGetIssue],
    () => GET(`/issue?status=${status}&filter=${filter}&page=${page}`),
    {
      refetchInterval: ISSUE_REFETCH,
      keepPreviousData: true,
    }
  );
  const result = processQueryData(data);
  return [result, isLoading];
};

export const useIssueDetailQuery = (id) => {
  const { data, isLoading } = useQuery(
    ['ISSUE', 'DETAIL', id],
    () => GET(`/issue/detail?id=${id}`),
    {
      refetchInterval: ISSUE_REFETCH,
    }
  );
  const result = processQueryData(data);
  return [result, isLoading];
};

export const useIssueLengthQuery = (paramGetIssue) => {
  const filter = paramGetIssue.filter;
  const { data } = useQuery(
    ['ISSUE', 'LENGTH', filter],
    () => GET(`/issue/length?filter=${filter}`),
    {
      refetchInterval: ISSUE_REFETCH,
    }
  );
  const result = processQueryData(data);
  return result ? result : 0;
};
