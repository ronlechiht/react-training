//import { HttpService } from './HttpService';
import { QueryParams } from '../types/QueryParams';
import { PRODUCTS_API } from '../constants';
import { get, getId } from './HttpService';

export const getProducts = (params?: QueryParams) => {
  const { data, error, isLoading } = get(PRODUCTS_API, params);

  return {
    products: data,
    isProductsError: error,
    isProductsLoading: isLoading
  };
};

export const getProductById = (id: string) => {
  const { data, error, isLoading } = getId(PRODUCTS_API, id);

  return {
    product: data,
    isProductError: error,
    isProductLoading: isLoading
  };
};
