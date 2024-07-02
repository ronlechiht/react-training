//import { HttpService } from './HttpService';
import { CART_API } from '../constants';
import { CartProduct } from '../types/CartProduct';
import { get, put, post, remove } from './HttpService';

export const getCart = () => {
  return get(CART_API);
};

export const addProduct = (data: Omit<CartProduct, 'id'>) => {
  return post(CART_API, data);
};

export const updateProduct = (data: CartProduct) => {
  return put(CART_API, data, data.id);
};

export const deleteProduct = (id: string) => {
  return remove(CART_API, id);
};
