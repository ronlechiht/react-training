/*Import hooks*/
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
/* Import constants */
import { COMPONENT_SIZES, ROUTES, TEXT_VARIANTS } from '../../constants';
/*Import types*/
import { CartProduct } from '../../types/CartProduct';
/* Import components */
import Text from '../../components/Text/Text';
import Cart from '../../components/Cart/Cart';
import Loading from '../../components/Loading';
/*Import services */
import { CartService } from '../../services/CartService';
/* Import CSS */
import './index.css';

const CartPage = () => {
  const navigate = useNavigate();
  const service = new CartService();
  const [cart, setCart] = useState<CartProduct[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await service.getCart();
        setCart(response);
      } catch (error) {
        navigate(ROUTES.errorPage);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container cart-page-body">
      <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.medium} className="cart-page-title">
        your cart
      </Text>
      {!isLoading ? <Cart cartProducts={cart!} /> : <Loading className="cart-loading" />}
    </div>
  );
};

export default CartPage;
