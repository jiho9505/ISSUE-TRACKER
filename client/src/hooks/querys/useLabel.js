import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processQueryData } from './queryCommon';

const LABEL_REFETCH = 1000 * 60 * 5;

export const useLabelQuery = () => {
  const { data } = useQuery('LABEL', () => GET('/label'), {
    refetchInterval: LABEL_REFETCH,
  });

  const result = processQueryData(data);
  return result;
};

export const useLabelLengthQuery = () => {
  const { data } = useQuery(['LABEL', 'LENGTH'], () => GET('/label/length'), {
    initialData: 0,
    refetchInterval: LABEL_REFETCH,
  });

  const result = processQueryData(data);
  return result;
};
