/*Import types*/
import { Product } from '../../types/Procduct';
/*Import components*/
import ProductCard from '../ProductCard/ProductCard';
/*Import CSS*/
import './ListProductCard.css';

const ListProductCard = ({
  products,
  variant = 'default'
}: {
  products: Product[];
  variant?: string;
}) => {
  return (
    <ul className={`list-product-card-${variant}`}>
      {products.map((product) => (
        <li key={product.productId}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ListProductCard;
