/* Import types */
import { CartProduct } from '../../types/CartProduct';
/* Import components */
import Text from '../Text/Text';
import Price from '../Price/Price';
import Quantity from '../Quantity/Quantity';
import { RemoveIcon } from '../Icon';
/* Import constants */
import { TEXT_VARIANTS, COMPONENT_SIZES } from '../../constants';
/* Import CSS */
import './CartItem.css';

const CartItem = (cartProduct: CartProduct) => {
  return (
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
          />
        </div>
        <div className="cart-item-control">
          <RemoveIcon />
          <Quantity firstQuantity={cartProduct.productQuantity} size={COMPONENT_SIZES.small} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
