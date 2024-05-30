/*Import components*/
import Text from '../../components/Text/Text';
import { FilterIcon } from '../../components/Icon';
import ListProductCard from '../../components/ListProductCard/ListProductCard';
import Loading from '../../components/Loading';
/*Import service*/
import { ProductService } from '../../services/ProductService';
/*Import CSS*/
import './index.css';
import { QUERY_PARAM_KEYS } from '../../constants';
import { useState, useEffect } from 'react';
import { Product } from '../../types/Procduct';

const HomePage = () => {
  const service = new ProductService();
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await service.getProducts({ [QUERY_PARAM_KEYS.limit]: 9 });
        setProducts(response);
      } catch (error) {
        console.log(`ERRORRRRRRRR:${error}`);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const productStyle = 'Casual';
  return (
    <div className="container home-page-body">
      <div className="filter-container">
        <Text>Filters</Text>
        <FilterIcon />
      </div>
      <div className="list-products-container">
        <div className="list-products-header">
          <Text className="product-style">{productStyle}</Text>
          <Text>Showing 1-9 of 100 Products</Text>
          <div className="sort-container">
            <label>Sort by:</label>
            <select className="sort-option-list">
              <option value="popular">Most Popular</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        {!isLoading ? (
          <ListProductCard products={products!} />
        ) : (
          <Loading className="list-product-loading" />
        )}
      </div>
    </div>
  );
};

export default HomePage;
