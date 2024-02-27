import axios from 'axios';
import { useQuery } from 'react-query';
import { ICountry } from '@/types';
import { fieldsFilter, BASE_URL } from './index';

const fetchCountry = ({ queryKey }) => {
  return axios
    .get(`${BASE_URL}/alpha`, {
      params: {
        fields: fieldsFilter,
        codes: queryKey[1],
      },
    })
    .then<ICountry[]>((response) => response.data)
    .catch((reason) => {
      throw reason;
    });
};

export const useGetCountry = (queryParams: string | undefined = '') => {
  return useQuery<any, any, ICountry, any>(
    ['search', queryParams],
    fetchCountry,
    {
      select(data) {
        if (data && data.length) return data[0];
      },
      retry: false,
      refetchInterval: false,
    }
  );
};
