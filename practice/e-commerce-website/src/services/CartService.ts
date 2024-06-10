//import { HttpService } from './HttpService';
import { CART_API } from '../constants';
import { get } from './HttpService';

export const getCart = () => {
  const { data, error, isLoading } = get(CART_API);

  return {
    cart: data,
    isCartError: error,
    isCartLoading: isLoading
  };
};
