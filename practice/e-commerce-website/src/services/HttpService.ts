import axios from 'axios';
import { QueryParams } from '../types/QueryParams';
import { buildQueryString } from '../utils/buildQueryString';

const api = axios.create();

export const get = async (baseAPI: string, params?: QueryParams) => {
  let path = baseAPI;
  if (params) {
    const queryString: string = buildQueryString<QueryParams>(params);
    path = baseAPI + queryString;
  }
  const response = await api.get(path);
  return response.data;
};

export const getId = async (baseAPI: string, id: string) => {
  const path: string = `${baseAPI}/${id}`;

  const response = await api.get(path);
  return response.data;
};

export const post = async <T>(baseAPI: string, data: T) => {
  const response = await api.post(baseAPI, data);
  return response.data;
};

export const put = async <T>(baseAPI: string, data: T, id: string) => {
  const path: string = `${baseAPI}/${id}`;
  const response = await api.put(path, data);
  return response.data;
};

export const remove = async (baseAPI: string, id: string) => {
  const path: string = `${baseAPI}/${id}`;
  const response = await api.delete(path);
  return response;
};
