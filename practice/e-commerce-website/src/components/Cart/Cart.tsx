/* Import types */
import { CartProduct } from '../../types/CartProduct';
/* Import components */
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';
import Divider from '../Divider/Divider';
/* Import helpers */
import { calcSubTotal } from '../../helpers/calcPrice';
/* Import CSS */
import './Cart.css';

const Cart = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  const subtotal = calcSubTotal(cartProducts);
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
