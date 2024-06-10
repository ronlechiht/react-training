import axios from 'axios';
import { QueryParams } from '../types/QueryParams';
import { buildQueryString } from '../utils/buildQueryString';
import useSWR from 'swr';

const api = axios.create();

//const fetcher = (baseAPI: string) => fetch(baseAPI).then((res) => res.json());

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const get = (baseAPI: string, params?: QueryParams) => {
  let path = baseAPI;
  if (params) {
    const queryString: string = buildQueryString<QueryParams>(params);
    path = baseAPI + queryString;
  }

  const { data, error, isLoading } = useSWR(path, fetcher);
  return { data, error, isLoading };
};

export const getId = (baseAPI: string, id: string) => {
  const path: string = `${baseAPI}/${id}`;

  const { data, error, isLoading } = useSWR(path, fetcher);
  return { data, error, isLoading };
};

export const post = <T>(baseAPI: string, data: T) => {
  return api.post(baseAPI, data);
};
