/* Import hooks */
import { useState } from 'react';
/* Import types */
import { Product } from '../../types/Procduct';
/* Import components */
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
import InputRadio from '../InputRadio/InputRadio';
import Quantity from '../Quantity/Quantity';
import Text from '../Text/Text';
import Button from '../Button/Button';
/* Import constants */
import {
  BUTTON_VARIANTS,
  COMPONENT_SIZES,
  INPUT_RADIO_VARIANTS,
  TEXT_VARIANTS
} from '../../constants';
/* Import CSS */
import './ProductDetails.css';
import Divider from '../Divider/divider';

const ProductImage = ({ productId, imageIndexs }: { productId: string; imageIndexs: string[] }) => {
  const [index, setIndex] = useState(imageIndexs[0]);
  const handleClick = (newIndex: string) => {
    setIndex(newIndex);
  };
  return (
    <div className="product-image">
      <div className="list-product-image">
        {imageIndexs.map((imageIndex) => (
          <img
            src={`images/products/${productId}/${imageIndex}-sm.png`}
            alt={`Image ${imageIndex}`}
            className={index === imageIndex ? 'product-image-sm selected' : 'product-image-sm'}
            onClick={() => handleClick(imageIndex)}
          />
        ))}
      </div>
      <img src={`images/products/${productId}/${index}-lg.png`} alt="Big image" />
    </div>
  );
};

const ProductDetails = (product: Product) => {
  return (
    <div className="product-details">
      <ProductImage productId={product.productId} imageIndexs={product.imageIndexs} />
      <div className="product-infor">
        <Text
          variant={TEXT_VARIANTS.title}
          size={COMPONENT_SIZES.medium}
          content={product.productName}
        />
        <Rating rating={product.productRating} size={COMPONENT_SIZES.large} />
        <span className="rating-value">{product.productRating}/5</span>
        <Price
          price={product.productPrice}
          discount={product.productDiscount}
          size={COMPONENT_SIZES.large}
        />
        <Text
          variant={TEXT_VARIANTS.default}
          className="product-desc"
          content={product.productDesc}
        />
        <Divider />
        <InputRadio variant={INPUT_RADIO_VARIANTS.color} options={product.productColors} />
        <Divider />
        <InputRadio variant={INPUT_RADIO_VARIANTS.size} options={product.productSizes} />
        <Divider />
        <div className="quantity-button-container">
          <Quantity firstQuantity={1} size={COMPONENT_SIZES.large} />
          <Button
            variant={BUTTON_VARIANTS.primary}
            size={COMPONENT_SIZES.medium}
            label="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
