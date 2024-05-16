/* Import types */
import { CartProduct } from '../../types/CartProduct';
/* Import components */
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';
import Divider from '../Divider/Divider';
/* Import helpers */
import { calcPrice } from '../../helpers/calcPrice';
/* Import CSS */
import './Cart.css';

const Cart = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  let subtotal = 0;
  cartProducts.map((cartProduct) => {
    subtotal +=
      calcPrice(cartProduct.productPrice, cartProduct.productDiscount) *
      cartProduct.productQuantity;
  });
  return (
    <div className="cart">
      <ul className="list-cart-product">
        {cartProducts.map((cartProduct, index) => (
          <li key={cartProduct.productId}>
            {index > 0 && <Divider />}
            <CartItem {...cartProduct} />
          </li>
        ))}
      </ul>
      <CartSummary subtotal={subtotal} discount={20} deliveryFee={15} />
    </div>
  );
};

export default Cart;
