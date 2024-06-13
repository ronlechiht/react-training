/* Import types */
import { CartItemType } from '../../types/CartItem';
import { CartProduct } from '../../types/CartProduct';
/* Import components */
import Text from '../Text/Text';
import Price from '../Price/Price';
import Quantity from '../Quantity/Quantity';
import { RemoveIcon } from '../Icon';
/* Import constants */
import { TEXT_VARIANTS, COMPONENT_SIZES } from '../../constants';
/* Import services */
import { updateProduct, deleteProduct } from '../../services/CartService';
import { getProductById } from '../../services/ProductService';
/* Import CSS */
import './CartItem.css';
import { useEffect, useState } from 'react';

const CartItem = ({
  cartProduct,
  handler
}: {
  cartProduct: CartProduct;
  handler: CallableFunction;
}) => {
  const [quantity, setQuantity] = useState(cartProduct.productQuantity);
  const { product, isProductLoading } = getProductById(cartProduct.productId);
  let cartItem: CartItemType;
  useEffect(() => {
    if (!isProductLoading) {
      cartItem = {
        ...cartProduct,
        productName: product.productName,
        productPrice: product.productPrice,
        productDiscount: product.productDiscount
      };
      handler(cartItem);
    }
  });

  const handleChange = (newCount: number) => {
    setQuantity(newCount);
    cartProduct.productQuantity = newCount;
    updateProduct(cartProduct);
  };

  const handleDelete = () => {
    deleteProduct(cartProduct.id);
  };

  return (
    <>
      {!isProductLoading && (
        <div className="cart-item">
          <img
            src={`assets/images/${cartProduct.productId}.webp`}
            alt="product image"
            className="cart-item-image"
          />
          <div className="cart-item-body">
            <div className="cart-item-infor">
              <Text variant={TEXT_VARIANTS.name}>{product.productName}</Text>
              <Text className="item-infor-props">
                <span>Size: </span>
                {cartProduct.productSize}
              </Text>
              <Text className="item-infor-props">
                <span>Color: </span>
                {cartProduct.productColor}
              </Text>
              <Price
                price={product.productPrice}
                discount={product.productDiscount}
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
