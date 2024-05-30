/*Import types*/
import { Product } from '../../types/Procduct';
/*Import components*/
import Text from '../Text/Text';
import ProductCard from '../ProductCard/ProductCard';
/*Import constants*/
import { EMPTY_MSG_LIST } from '../../constants';
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
    <>
      {products.length ? (
        <ul className={`list-product-card-${variant}`}>
          {products.map((product) => (
            <li key={product.productId}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-product-page flex-center-center">
          <Text className="empty-product-message">{EMPTY_MSG_LIST.product}</Text>
        </div>
      )}
    </>
  );
};

export default ListProductCard;
