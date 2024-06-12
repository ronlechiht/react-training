/*Import types*/
import { CartItemType } from '../types/CartItem';
import { CartProduct } from '../types/CartProduct';
import { Product } from '../types/Procduct';

/**
 *
 * @param price Origin price of product
 * @param discount Discount of product
 * @returns Discount value
 */
export const calcDiscount = (price: number, discount: number) => {
  return Math.round((price * discount) / 100);
};

/**
 *
 * @param price Origin price of product
 * @param discount Discount of product
 * @returns Reduced Price
 */
export const calcPrice = (price: number, discount: number) => {
  return price - calcDiscount(price, discount);
};

export const calcTotalPrice = (cartProduct: CartProduct, product: Product) => {
  return calcPrice(product.productPrice, product.productDiscount) * cartProduct.productQuantity;
};

export const calcSubTotal = (cart: CartItemType[]) => {
  let result = 0;
  cart.map((cartItem) => {
    result += calcPrice(cartItem.productPrice, cartItem.productDiscount) * cartItem.productQuantity;
  });
  return result;
};

/**
 *
 * @param subTotal subtotal price of cart
 * @param discount Discount value of cart
 * @param deliveryFee Delivery Fee
 * @returns Total price of Cart
 */
export const calcSummaryTotal = (subTotal: number, discount: number, deliveryFee: number) => {
  return subTotal - discount + deliveryFee;
};
