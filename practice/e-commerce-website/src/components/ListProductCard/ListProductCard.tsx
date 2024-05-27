import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const detailsPage = () => {
    navigate('/details/10');
  };
  return (
    <ul className={`list-product-card-${variant}`}>
      {products.map((product) => (
        <li key={product.productId} onClick={detailsPage}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ListProductCard;
