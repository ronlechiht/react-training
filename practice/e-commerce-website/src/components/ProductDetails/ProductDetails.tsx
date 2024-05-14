/* Import hooks */
import { useState } from 'react';
/* Import types */
import { Product } from '../../types/Procduct';
/* Import components */
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
import InputRadio from '../InputRadio/InputRadio';
import Quantity from '../Quantity/Quantity';
import Button from '../Button/Button';
/* Import constants */
import { BUTTON_VARIANTS, COMPONENT_SIZES, INPUT_RADIO_VARIANTS } from '../../constants/constants';
/* Import CSS */
import './ProductDetails.css';
import Divider from '../Divider/divider';

const ProductImage = ({ productId }: { productId: string }) => {
  const [index, setIndex] = useState('01');
  const handleClick = (newIndex: string) => {
    setIndex(newIndex);
  };
  return (
    <div className="product-image">
      <div className="list-product-image">
        <img
          src={`images/products/${productId}/01-sm.png`}
          alt="Image 01"
          className={index === '01' ? 'product-image-sm selected' : 'product-image-sm'}
          onClick={() => handleClick('01')}
        />
        <img
          src={`images/products/${productId}/02-sm.png`}
          alt="Image 02"
          className={index === '02' ? 'product-image-sm selected' : 'product-image-sm'}
          onClick={() => handleClick('02')}
        />
        <img
          src={`images/products/${productId}/03-sm.png`}
          alt="Image 01"
          className={index === '03' ? 'product-image-sm selected' : 'product-image-sm'}
          onClick={() => handleClick('03')}
        />
      </div>
      <img src={`images/products/${productId}/${index}-lg.png`} alt="Big image" />
    </div>
  );
};

const ProductDetails = (product: Product) => {
  return (
    <div className="product-details">
      <ProductImage productId={product.productId} />
      <div className="product-infor">
        <p className="product-name">{product.productName}</p>
        <Rating rating={product.productRating} size={COMPONENT_SIZES.large} />
        <span className="rating-value">{product.productRating}/5</span>
        <Price
          price={product.productPrice}
          discount={product.productDiscount}
          size={COMPONENT_SIZES.large}
        />
        <p className="product-desc">{product.productDesc}</p>
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
