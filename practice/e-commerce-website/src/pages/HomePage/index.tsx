import { useNavigate } from 'react-router-dom';
/*Import components*/
import Text from '../../components/Text/Text';
import { FilterIcon } from '../../components/Icon';
import ListProductCard from '../../components/ListProductCard/ListProductCard';
import Loading from '../../components/Loading';
/*Import service*/
import { getProducts } from '../../services/ProductService';
/*Import CSS*/
import './index.css';
import { QUERY_PARAM_KEYS, ROUTES } from '../../constants';
import { useState } from 'react';
import { QueryParams } from '../../types/QueryParams';
import Divider from '../../components/Divider';
import FilterSelect from '../../components/FilterSelect';
import { omit } from 'lodash';

const HomePage = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState<QueryParams>({
    [QUERY_PARAM_KEYS.page]: 1,
    [QUERY_PARAM_KEYS.limit]: 9
  });
  const { products, isProductsError, isProductsLoading } = getProducts(params);
  isProductsError && navigate(ROUTES.errorPage);

  const handleSort = () => {
    const sortOption = (document.querySelector('.sort-option-list')! as HTMLInputElement).value;
    const newParams = { ...params, [QUERY_PARAM_KEYS.sort]: sortOption };
    setParams(newParams);
  };

  const handleFilter = (e: Event) => {
    const filterOption = (e.target as Element).innerHTML;
    let newParams: QueryParams;
    filterOption === params.productType
      ? (newParams = omit(params, [QUERY_PARAM_KEYS.search]))
      : (newParams = { ...params, [QUERY_PARAM_KEYS.search]: filterOption });
    setParams(newParams);
  };

  const productStyle = 'Casual';
  const options = ['t-shirts', 'shorts', 'shirts', 'hoodie', 'jeans'];
  return (
    <div className="container home-page-body">
      <div className="filter-container">
        <div className="filter-header">
          <Text>Filters</Text>
          <FilterIcon />
        </div>
        <Divider />
        <FilterSelect options={options} handler={() => handleFilter} />
        <Divider />
      </div>
      <div className="list-products-container">
        <div className="list-products-header">
          <Text className="product-style">{productStyle}</Text>
          <Text>Showing 1-9 of 100 Products</Text>
          <div className="sort-container">
            <label>Sort by:</label>
            <select className="sort-option-list" onChange={handleSort}>
              <option value="productSold">Most Popular</option>
              <option value="productPrice">Price</option>
              <option value="productRating">Rating</option>
            </select>
          </div>
        </div>
        {!isProductsLoading ? (
          <ListProductCard products={products!} />
        ) : (
          <Loading className="list-product-loading" />
        )}
      </div>
    </div>
  );
};

export default HomePage;
