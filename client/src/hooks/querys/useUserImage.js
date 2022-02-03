import { useQuery } from 'react-query';
import { GET } from '@/api/base';
import { processData } from './queryCommon';

export const useUserImageQuery = () => {
  const { data } = useQuery('USER_IMAGE', () => GET('/users/image'), {
    refetchOnWindowFocus: false,
  });
  const result = processData(data);
  return result;
};
