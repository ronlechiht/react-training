/*Import components*/
import Text from '../../components/Text/Text';
import { FilterIcon } from '../../components/Icon';
import ListProductCard from '../../components/ListProductCard/ListProductCard';
/*Import service*/
import { ProductService } from '../../services/ProductService';
/*Import CSS*/
import './index.css';
import { QUERY_PARAM_KEYS } from '../../constants';

const service = new ProductService();
const params = {
  [QUERY_PARAM_KEYS.limit]: 9
};
const products = await service.getProducts(params);

const HomePage = () => {
  const productStyle = 'Casual';
  return (
    <div className="home-page-body">
      <div className="filter-container">
        <Text>Filters</Text>
        <FilterIcon />
      </div>
      <div className="list-products-container">
        <div className="list-products-header">
          <Text className="product-style">{productStyle}</Text>
          <Text>Showing 1-10 of 100 Products</Text>
          <div className="sort-container">
            <label>Sort by:</label>
            <select className="sort-option-list">
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        <ListProductCard products={products} />
      </div>
    </div>
  );
};

export default HomePage;
