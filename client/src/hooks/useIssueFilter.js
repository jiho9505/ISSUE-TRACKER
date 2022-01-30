import { useQuery } from 'react-query';
import { GET } from '../api/base';

export const useIssueFilterQuery = () => {
  const { data } = useQuery('ISSUE_FILTER', () => GET('/issue-filter'), {
    refetchOnWindowFocus: false,
    refetchInterval: Infinity,
  });
  return data;
};
