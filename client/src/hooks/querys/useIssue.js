import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const ISSUE_REFETCH = 1000 * 60 * 5;

export const useIssueLengthQuery = (paramGetIssue) => {
  const filter = paramGetIssue.filter;
  const { data } = useQuery(['ISSUE', 'LENGTH'], () => GET(`/issue/length?filter=${filter}`), {
    refetchInterval: ISSUE_REFETCH,
  });
  const result = processQueryData(data);
  return result ? result : 0;
};
