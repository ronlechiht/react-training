/*Import hooks*/
import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import types */
import { CartItemType } from '../../types/CartItem';
/* Import components */
import Text from '../../components/Text/Text';
import Cart from '../../components/Cart/Cart';
/* Import helpers */
import { calcSubtotal } from '../../helpers/calcPrice';
/* Import CSS */
import './index.css';

const CartPage = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return null;
  }
  const { state, products } = cartContext;

  const items = state.items.reduce((acc: CartItemType[], item) => {
    const product = products.find((product) => product.id === item.productId)!;
    acc.push({
      ...item,
      productName: product.productName,
      productPrice: product.productPrice,
      productDiscount: product.productDiscount
    });
    return acc;
  }, []);

  return (
    <div className="container cart-page-body">
      <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.medium} className="cart-page-title">
        your cart
      </Text>
      <Cart cartProducts={items} subtotal={calcSubtotal(items)} />
    </div>
  );
};

export default CartPage;
