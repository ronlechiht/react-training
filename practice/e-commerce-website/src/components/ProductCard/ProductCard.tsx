/*Import types*/
import { Product } from '../../types/Procduct';
/*Import components*/
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
/* Import constants */
import { COMPONENT_SIZES } from '../../constants/constants';
/*Import CSS*/
import './ProductCard.css';

const ProductCard = (product: Product) => {
  return (
    <div className="product-card">
      <img src={`images/products/${product.productId}.webp`} alt="product image" />
      <div className="product-infor">
        <p className="product-name">{product.productName}</p>
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
