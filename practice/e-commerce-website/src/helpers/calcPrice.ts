/*Import types*/
import { CartItemType } from '../types/CartItem';

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

export const calcSubtotal = (items: CartItemType[]) => {
  return items.reduce((total, item) => {
    return total + calcPrice(item.productPrice, item.productDiscount) * item.productQuantity;
  }, 0);
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
