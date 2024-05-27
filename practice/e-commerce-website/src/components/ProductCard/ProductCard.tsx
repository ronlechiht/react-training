/*Import types*/
import { Product } from '../../types/Procduct';
/*Import components*/
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
import Text from '../Text/Text';
/* Import constants */
import { COMPONENT_SIZES } from '../../constants';
/*Import CSS*/
import './ProductCard.css';

const ProductCard = (product: Product) => {
  return (
    <div className="product-card">
      <img src={`/assets/images/${product.productId}.webp`} alt="product image" />
      <div className="product-infor">
        <Text className="product-name">{product.productName}</Text>
        <Rating rating={product.productRating} size={COMPONENT_SIZES.small} />
        <span className="rating-value">{product.productRating}/5</span>
        <Price
          price={product.productPrice}
          discount={product.productDiscount}
          size={COMPONENT_SIZES.small}
        />
      </div>
    </div>
  );
};

export default ProductCard;
