import { CartProduct } from './CartProduct';

export interface CartItemType extends CartProduct {
  productName: string;
  productPrice: number;
  productDiscount: number;
}
