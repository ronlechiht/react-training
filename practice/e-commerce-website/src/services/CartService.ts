//import { HttpService } from './HttpService';
import { CART_API } from '../constants';
import { CartProduct } from '../types/CartProduct';
import { get, post } from './HttpService';

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
