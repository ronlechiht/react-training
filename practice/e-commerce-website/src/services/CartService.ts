//import { HttpService } from './HttpService';
import { CART_API } from '../constants';
import { CartProduct } from '../types/CartProduct';
import { get, put, post, remove } from './HttpService';

export const getCart = () => {
  const { data, error, isLoading, mutate }: {data: CartProduct[], error: boolean, isLoading: boolean, mutate} = get(CART_API);

  return {
    cart: data,
    isCartError: error,
    isCartLoading: isLoading,
    mutate
  };
};

export const addProduct = (data: CartProduct) => {
  return post(CART_API, data);
};

export const updateProduct = (data: CartProduct) => {
  return put(CART_API, data, data.id);
};

export const deleteProduct = (id: string) => {
  return remove(CART_API, id);
};
