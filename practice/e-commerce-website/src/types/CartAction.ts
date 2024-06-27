import { CartProduct } from './CartProduct';

export type CartAction =
  | { type: 'SET_CART'; payload: CartProduct[] }
  | { type: 'ADD_ITEM'; payload: CartProduct }
  | { type: 'UPDATE_ITEM'; payload: CartProduct }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };
