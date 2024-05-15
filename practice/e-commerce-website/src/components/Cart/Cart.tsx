/* Import types */
import { CartProduct } from '../../types/CartProduct';
/* Import components */
import CartItem from '../CartItem/CartItem';
import Divider from '../Divider/Divider';
/* Import CSS */

const Cart = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  return (
    <div className="cart">
      <ul className="list-product-card">
        {cartProducts.map((cartProduct) => (
          <li key={cartProduct.productId}>
            <CartItem {...cartProduct} />
            <Divider />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
