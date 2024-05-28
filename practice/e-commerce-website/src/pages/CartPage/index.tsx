/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import components */
import Text from '../../components/Text/Text';
import Cart from '../../components/Cart/Cart';
/*Import services */
import { CartService } from '../../services/CartService';
/* Import CSS */
import './index.css';
import { useState, useEffect } from 'react';
import { CartProduct } from '../../types/CartProduct';
import Loading from '../../components/Loading';

const CartPage = () => {
  const service = new CartService();
  const [cart, setCart] = useState<CartProduct[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await service.getCart();
      setCart(response);
    };
    fetchData();
  }, []);

  return (
    <div className="cart-page-body">
      <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.medium} className="cart-page-title">
        your cart
      </Text>
      {cart ? <Cart cartProducts={cart} /> : <Loading className="cart-loading" />}
    </div>
  );
};

export default CartPage;
