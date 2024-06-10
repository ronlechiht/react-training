/*Import hooks*/
import { useNavigate } from 'react-router-dom';
/* Import constants */
import { COMPONENT_SIZES, ROUTES, TEXT_VARIANTS } from '../../constants';
/* Import components */
import Text from '../../components/Text/Text';
import Cart from '../../components/Cart/Cart';
import Loading from '../../components/Loading';
/*Import services */
import { getCart } from '../../services/CartService';
/* Import CSS */
import './index.css';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, isCartError, isCartLoading } = getCart();
  isCartError && navigate(ROUTES.errorPage);

  return (
    <div className="container cart-page-body">
      <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.medium} className="cart-page-title">
        your cart
      </Text>
      {!isCartLoading ? <Cart cartProducts={cart!} /> : <Loading className="cart-loading" />}
    </div>
  );
};

export default CartPage;
