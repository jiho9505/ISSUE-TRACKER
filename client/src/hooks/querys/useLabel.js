import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const LABEL_REFETCH = 1000 * 60 * 5;

export const useLabelQuery = () => {
  const { data, isLoading } = useQuery('LABEL', () => GET('/label'), {
    refetchInterval: LABEL_REFETCH,
  });
  const result = processQueryData(data);
  return [result, isLoading];
};

export const useLabelLengthQuery = () => {
  const { data } = useQuery(['LABEL', 'LENGTH'], () => GET('/label/length'), {
    refetchInterval: LABEL_REFETCH,
  });

  const result = processQueryData(data);
  return result ? result : 0;
};
