import { CartProduct } from './CartProduct';

export interface CartState {
  items: CartProduct[];
  countItems: number;
}
