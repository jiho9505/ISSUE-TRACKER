import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const ISSUE_LABEL_REFETCH = 1000 * 60 * 5;

export const useIssueLabelQuery = (issueId) => {
  const { data, isLoading } = useQuery(
    ['ISSUE_LABEL'],
    () => GET(`/issue-label?issueId=${issueId}`),
    {
      refetchInterval: ISSUE_LABEL_REFETCH,
    }
  );
  const result = processQueryData(data);
  return [result, isLoading];
};
