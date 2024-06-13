/* Import types */
import { CartItemType } from '../../types/CartItem';
/* Import components */
import Text from '../Text/Text';
import Price from '../Price/Price';
import Quantity from '../Quantity/Quantity';
import { RemoveIcon } from '../Icon';
/* Import constants */
import { TEXT_VARIANTS, COMPONENT_SIZES } from '../../constants';
/* Import CSS */
import './CartItem.css';
import { useState } from 'react';
import { deleteProduct } from '../../services/CartService';

const CartItem = ({ cartItem }: { cartItem: CartItemType}) => {
  const [quantity, setQuantity] = useState(cartItem.productQuantity);

  const handleChange = (newCount: number) => {
    setQuantity(newCount);
  };

  const handleDelete = () => {
    deleteProduct(cartItem.id);
  };

  return (
    <>
      <div className="cart-item">
        <img
          src={`assets/images/${cartItem.productId}.webp`}
          alt="product image"
          className="cart-item-image"
        />
        <div className="cart-item-body">
          <div className="cart-item-infor">
            <Text variant={TEXT_VARIANTS.name}>{cartItem.productName}</Text>
            <Text className="item-infor-props">
              <span>Size: </span>
              {cartItem.productSize}
            </Text>
            <Text className="item-infor-props">
              <span>Color: </span>
              {cartItem.productColor}
            </Text>
            <Price
              price={cartItem.productPrice}
              discount={cartItem.productDiscount}
              size={COMPONENT_SIZES.small}
              quantity={quantity}
            />
          </div>
          <div className="cart-item-control">
            <button onClick={handleDelete}>
              <RemoveIcon />
            </button>
            <Quantity
              firstQuantity={cartItem.productQuantity}
              size={COMPONENT_SIZES.small}
              change={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
