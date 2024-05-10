import { Product } from '../../types/Procduct';
import Rating from '../Rating/Rating';
import Price from '../Price/Price';
import './ProductCard.css';

export default function ProductCard(product: Product) {
  return (
    <div className="product-card">
      <img src={`images/products/${product.productId}.webp`} alt="product image" />
      <div className="product-infor">
        <p className="product-name">{product.productName}</p>
        <Rating rating={product.productRating} size={'sm'}></Rating>
        <span className="rating-value">{product.productRating}/5</span>
        <Price price={product.productPrice} discount={product.productDiscount} size={'sm'}></Price>
      </div>
    </div>
  );
}
