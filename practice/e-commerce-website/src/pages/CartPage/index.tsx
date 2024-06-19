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
import { useEffect, useState } from 'react';
import { CartProduct } from '../../types/CartProduct';

const CartPage = () => {
  const navigate = useNavigate();
  /*const [stateCart, setStateCart] = useState<CartProduct[]>([]);*/

  const { cart, isCartError, isCartLoading, mutate } = getCart();
  isCartError && navigate(ROUTES.errorPage);

  /*useEffect(() => {
    console.log(cart)
    setStateCart(cart)
  },[cart])*/

  const handleDeleteCartItem = (id: string) => {
    /*const newCart = cart.filter(cartProduct => cartProduct.id !== id)
    setStateCart(newCart)*/
    mutate(cart.filter(cartProduct => cartProduct.id !== id))
  }

  return (
    <div className="container cart-page-body">
      <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.medium} className="cart-page-title">
        your cart
      </Text>
      {!isCartLoading ? <Cart cartProducts={cart} handler={handleDeleteCartItem}/> : <Loading className="cart-loading" />}
    </div>
  );
};

export default CartPage;
