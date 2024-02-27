import axios from 'axios';
import { useQuery } from 'react-query';
import { ICountry } from '@/types';
import { fieldsFilter, BASE_URL } from './index';
import { queryStringToObject } from '@/lib/utils';

const fetchCountries = (url: string) => {
  return axios
    .get(url, {
      params: {
        fields: fieldsFilter,
      },
    })
    .then<ICountry[]>((response) => response.data)
    .catch((reason) => {
      throw reason;
    });
};
const fetchCountry = ({ queryKey }) => {
  let queryUrl = '/all';
  const hasFilter = !!queryKey[1];
  if (hasFilter) {
    const searchparams = queryStringToObject(queryKey[1]);
    const searchParamsEntries = Object.entries(searchparams);

    // if user filter results on by one filter then we create request and get result
    // if user use both filters we have to fetch both queries and merge unique items
    if (searchParamsEntries.length === 1) {
      if (searchParamsEntries[0][0] === 'search') {
        queryUrl = `/name/${searchparams.search}`;
      } else {
        queryUrl = `/region/${searchparams.type}`;
      }
    } else if (searchParamsEntries.length >= 2) {
      const data = Promise.all<ICountry[]>([
        fetchCountries(`${BASE_URL}/name/${searchparams.search}`),
        fetchCountries(`${BASE_URL}/region/${searchparams.type}`),
      ]).then((response) => {
        const shared = response[0].filter((searchedCountry) => {
          return response[1].some((regionCountry) => {
            return searchedCountry.alpha3Code === regionCountry.alpha3Code;
          });
        });

        return shared;
      });

      return data || [];
    }
  }

  return fetchCountries(`${BASE_URL}${queryUrl}`);
};

export const useGetCountries = (queryParams: string | null) => {
  return useQuery<any, any, Array<ICountry>, any>(
    ['search', queryParams],
    fetchCountry,
    {
      retry: false,
      refetchInterval: false,
    }
  );
};
