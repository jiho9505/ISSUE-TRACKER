import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const COMMENT_REFETCH = 1000 * 60 * 5;

export const useCommentQuery = (issueId) => {
  const { data, isLoading } = useQuery(['COMMENT'], () => GET(`/comment?issueId=${issueId}`), {
    refetchInterval: COMMENT_REFETCH,
  });
  const result = processQueryData(data);
  return [result, isLoading];
};
