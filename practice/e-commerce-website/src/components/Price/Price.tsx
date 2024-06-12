/*Import helpers*/
import { calcPrice } from '../../helpers/calcPrice';
/*Import constants */
import { COMPONENT_SIZES } from '../../constants';
/*Import CSS*/
import './Price.css';

/**
 *
 * @param price Origin price of product
 * @param discount Discount(%) of product
 * @param size (sm=Small, lg=Large)
 * @returns Origin price and discount of product
 */
const Discount = ({
  price,
  discount,
  size
}: {
  price: number;
  discount: number;
  size: COMPONENT_SIZES;
}) => {
  if (discount) {
    return (
      <>
        <span className="price-origin">${price}</span>
        <span className={['product-discount', `product-discount-${size}`].join(' ')}>
          -{discount}%
        </span>
      </>
    );
  }
};

/**
 *
 * @param price Origin price of product
 * @param discount Discount(%) of product
 * @param size (sm=Small, lg=Large)
 * @returns Price component
 */
const Price = ({
  price,
  discount,
  size,
  quantity
}: {
  price: number;
  discount: number;
  size: COMPONENT_SIZES;
  quantity?: number;
}) => {
  if (quantity) price = price * quantity;
  return (
    <div className={`product-price product-price-${size}`}>
      <span className="price-reduced">${calcPrice(price, discount)}</span>
      <Discount price={price} discount={discount} size={size} />
    </div>
  );
};

export default Price;
