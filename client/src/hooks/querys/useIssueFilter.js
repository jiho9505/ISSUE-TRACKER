import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processData } from './queryCommon';

export const useIssueFilterQuery = () => {
  const { data } = useQuery('ISSUE_FILTER', () => GET('/issue-filter'), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const result = processData(data);
  return result;
};
