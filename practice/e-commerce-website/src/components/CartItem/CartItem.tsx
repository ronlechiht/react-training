/* Import hooks */
import { useContext, useState } from 'react';
import { CartContext } from '../../hooks/useCart';
/* Import types */
import { CartItemType } from '../../types/CartItem';
/* Import components */
import Text from '../Text/Text';
import Price from '../Price/Price';
import Quantity from '../Quantity/Quantity';
import { RemoveIcon } from '../Icon';
/* Import constants */
import { TEXT_VARIANTS, COMPONENT_SIZES } from '../../constants';
/* Import services */
import { updateProduct, deleteProduct } from '../../services/CartService';
/* Import CSS */
import './CartItem.css';

const CartItem = ({ cartProduct }: { cartProduct: CartItemType }) => {
  const [quantity, setQuantity] = useState(cartProduct.productQuantity);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }
  const { updateItem, removeItem } = cartContext;

  const handleChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    cartProduct.productQuantity = newQuantity;
    updateItem(cartProduct);
    updateProduct(cartProduct);
  };

  const handleDelete = () => {
    removeItem(cartProduct.id);
    deleteProduct(cartProduct.id);
  };

  return (
    <>
      {cartProduct && (
        <div className="cart-item">
          <img
            src={`assets/images/${cartProduct.productId}.webp`}
            alt="product image"
            className="cart-item-image"
          />
          <div className="cart-item-body">
            <div className="cart-item-infor">
              <Text variant={TEXT_VARIANTS.name}>{cartProduct.productName}</Text>
              <Text className="item-infor-props">
                <span>Size: </span>
                {cartProduct.productSize}
              </Text>
              <Text className="item-infor-props">
                <span>Color: </span>
                {cartProduct.productColor}
              </Text>
              <Price
                price={cartProduct.productPrice}
                discount={cartProduct.productDiscount}
                size={COMPONENT_SIZES.small}
                quantity={quantity}
              />
            </div>
            <div className="cart-item-control">
              <button onClick={handleDelete}>
                <RemoveIcon />
              </button>
              <Quantity
                firstQuantity={cartProduct.productQuantity}
                size={COMPONENT_SIZES.small}
                change={handleChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
