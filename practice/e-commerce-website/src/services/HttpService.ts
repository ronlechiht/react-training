import axios from 'axios';
import { QueryParams } from '../types/QueryParams';
import { buildQueryString } from '../utils/buildQueryString';
import useSWR from 'swr';

const api = axios.create();

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const get = (baseAPI: string, params?: QueryParams) => {
  let path = baseAPI;
  if (params) {
    const queryString: string = buildQueryString<QueryParams>(params);
    path = baseAPI + queryString;
  }

  const { data, error, isLoading, mutate } = useSWR(path, fetcher);
  return { data, error, isLoading, mutate };
};

export const getId = (baseAPI: string, id: string) => {
  const path: string = `${baseAPI}/${id}`;

  const { data, error, isLoading } = useSWR(path, fetcher);
  return { data, error, isLoading };
};

export const post = <T>(baseAPI: string, data: T) => {
  api.post(baseAPI, data);
};

export const put = <T>(baseAPI: string, data: T, id: string) => {
  const path: string = `${baseAPI}/${id}`;
  api.put(path, data);
};

export const remove = (baseAPI: string, id: string) => {
  const path: string = `${baseAPI}/${id}`;
  api.delete(path);
};
