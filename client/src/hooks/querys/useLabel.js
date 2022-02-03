import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processData } from './queryCommon';

export const useLabelQuery = () => {
  const { data } = useQuery('LABEL', () => GET('/label'));

  const result = processData(data);
  return result;
};
