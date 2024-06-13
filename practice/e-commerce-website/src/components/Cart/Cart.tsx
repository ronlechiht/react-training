import { useState } from 'react';
/* Import types */
import { CartProduct } from '../../types/CartProduct';
/*Import constants*/
import { EMPTY_MSG_LIST } from '../../constants';
/* Import components */
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';
import Divider from '../Divider';
import Text from '../Text/Text';
/* Import helpers */
import { calcSubTotal } from '../../helpers/calcPrice';
/* Import CSS */
import './Cart.css';
import { CartItemType } from '../../types/CartItem';

const Cart = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  const cart: CartItemType[] = [];
  const [subtotal, setSubtotal] = useState(0);
  const handleUpdateCart = (cartItem: CartItemType, newCount?: number) => {
    if (newCount) cartItem.productQuantity = newCount;
    cart.push(cartItem);
    setSubtotal(calcSubTotal(cart));
  };

  return (
    <>
      {cartProducts.length ? (
        <div className="cart">
          <ul className="list-cart-product">
            {cartProducts.map((cartProduct, index) => (
              <li key={cartProduct.id}>
                {index > 0 && <Divider />}
                <CartItem cartProduct={cartProduct} handler={handleUpdateCart} />
              </li>
            ))}
          </ul>
          <CartSummary subtotal={subtotal} discount={20} deliveryFee={15} />
        </div>
      ) : (
        <div className="empty-cart-page flex-center-center">
          <Text className="empty-message">{EMPTY_MSG_LIST.cart}</Text>
        </div>
      )}
    </>
  );
};

export default Cart;
