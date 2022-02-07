import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const ASSIGNEE_REFETCH = 1000 * 60 * 5;

export const useAssigneeQuery = (issueId) => {
  const { data, isLoading } = useQuery(['ASSIGNEE'], () => GET(`/assignee?issueId=${issueId}`), {
    refetchInterval: ASSIGNEE_REFETCH,
  });
  const result = processQueryData(data);
  return [result, isLoading];
};
