/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import components */
import Text from '../../components/Text/Text';
import Cart from '../../components/Cart/Cart';
/*Import services */
import { CartService } from '../../services/CartService';
/* Import CSS */
import './index.css';

const service = new CartService();
const cartProducts = await service.getCart();

const CartPage = () => {
  return (
    <div className="cart-page-body">
      <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.medium} className="cart-page-title">
        your cart
      </Text>
      <Cart cartProducts={cartProducts} />
    </div>
  );
};

export default CartPage;
