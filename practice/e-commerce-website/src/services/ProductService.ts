//import { HttpService } from './HttpService';
import { QueryParams } from '../types/QueryParams';
import { PRODUCTS_API } from '../constants';
import { get, getId } from './HttpService';

export const getProducts = (params?: QueryParams) => {
  return get(PRODUCTS_API, params);
};

export const getProductById = (id: string) => {
  return getId(PRODUCTS_API, id);
};
