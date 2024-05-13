/**
 *
 * @param price Origin price of product
 * @param discount Discount of product
 * @returns Reduced Price
 */
export const calcPrice = (price: number, discount: number) => {
  return Math.round((price * (100 - discount)) / 100);
};
