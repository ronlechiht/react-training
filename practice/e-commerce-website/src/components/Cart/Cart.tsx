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
/* Import services */
import { getProductById } from '../../services/ProductService';
/* Import CSS */
import './Cart.css';
import { CartItemType } from '../../types/CartItem';
import { deleteProduct } from '../../services/CartService';

const Cart = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  const cart: CartItemType[] = [];
  cartProducts.map((cartProduct) => {
    const { product, isProductLoading } = getProductById(cartProduct.productId);
    if (!isProductLoading) {
      const cartItem = {
        ...cartProduct,
        productName: product.productName,
        productPrice: product.productPrice,
        productDiscount: product.productDiscount
      };
      cart.push(cartItem);
    }
  });
  const subtotal = calcSubTotal(cart);

  const handleDeleteItem = (id: string) => {
    deleteProduct(id);
  };
  return (
    <>
      {cartProducts.length ? (
        <div className="cart">
          <ul className="list-cart-product">
            {cart.map((cartItem, index) => (
              <li key={cartItem.id}>
                {index > 0 && <Divider />}
                <CartItem cartItem={cartItem} handler={handleDeleteItem} />
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
