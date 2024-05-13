/*Import types*/
import { Product } from '../../types/Procduct';
/*Import components*/
import ProductCard from '../ProductCard/ProductCard';
/*Import CSS*/
import './ListProductCard.css';

const ListProductCard = ({ products }: { products: Product[] }) => {
  return (
    <ul className="list-product-card">
      {products.map((product) => (
        <li key={product.productId}>
          <ProductCard {...product}/>
        </li>
      ))}
    </ul>
  );
}

export default ListProductCard
