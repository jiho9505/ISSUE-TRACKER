import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processData } from './queryCommon';

export const useLabelLengthQuery = () => {
  const { data } = useQuery('LABEL_LENGTH', () => GET('/label/length'));

  const result = processData(data);
  return result;
};
