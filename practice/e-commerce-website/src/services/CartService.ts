//import { HttpService } from './HttpService';
import { CART_API } from '../constants';
import { CartProduct } from '../types/CartProduct';
import { get, post, remove } from './HttpService';

export const getCart = () => {
  const { data, error, isLoading } = get(CART_API);

  return {
    cart: data,
    isCartError: error,
    isCartLoading: isLoading
  };
};

export const addProduct = (data: CartProduct) => {
  return post(CART_API, data);
};

export const deleteProduct = (id: string) => {
  return remove(CART_API, id);
};
