import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

export const useIssueFilterQuery = () => {
  const { data } = useQuery('ISSUE_FILTER', () => GET('/issue-filter'), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const result = processQueryData(data);
  return result;
};
