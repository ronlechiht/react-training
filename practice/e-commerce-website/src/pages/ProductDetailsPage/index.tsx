/* Import hooks */
import { useNavigate, useParams } from 'react-router-dom';
/* Import constants */
import {
  BUTTON_VARIANTS,
  COMPONENT_SIZES,
  QUERY_PARAM_KEYS,
  ROUTES,
  TEXT_VARIANTS
} from '../../constants';
/* Import components */
import ListFeedback from '../../components/ListFeedback/ListFeedback';
import ListProductCard from '../../components/ListProductCard/ListProductCard';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Tabs from '../../components/Tabs';
import Text from '../../components/Text/Text';
import { FilterIcon } from '../../components/Icon';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading';
/* Import services */
import { getProductById, getProducts } from '../../services/ProductService';
/* Import CSS */
import './index.css';

const ProductDetailsPage = () => {
  const productId = useParams().productId!;
  const navigate = useNavigate();
  const { product, isProductError, isProductLoading } = getProductById(productId);
  const { products, isProductsError, isProductsLoading } = getProducts({
    [QUERY_PARAM_KEYS.limit]: 4
  });
  (isProductError || isProductsError) && navigate(ROUTES.errorPage);

  const informationTabs = ['product details', 'rating & reviews', 'FAQs'];
  return (
    <div className="container product-details-page-body">
      {!isProductLoading ? (
        <ProductDetails {...product!} />
      ) : (
        <Loading className="product-details-loading" />
      )}
      <Tabs tabs={informationTabs} />
      <div className="rating-feedback-tab">
        <div className="list-feedback-header">
          <Text className="feedbacks-title">
            <span>all reviews </span>({product?.feedbacks ? product.feedbacks.length : 0})
          </Text>
          <div className="feedback-filter-select">
            <FilterIcon alternative />
          </div>
          <select className="sort-option-list feedback-sort-select">
            <option value="latest">Latest</option>
          </select>
          <Button label="Write a Review" />
        </div>
        {!isProductLoading ? (
          <>
            <ListFeedback feedbacks={product.feedbacks!} />
            <Button
              variant={BUTTON_VARIANTS.outline}
              label="Load More Reviews"
              className="btn-load-reviews"
            />
          </>
        ) : (
          <Loading className="feedbacks-loading" />
        )}
      </div>
      <div className="recommend-product">
        <Text
          variant={TEXT_VARIANTS.title}
          size={COMPONENT_SIZES.large}
          className="recommend-product-title"
        >
          you might also like
        </Text>
        {!isProductsLoading ? (
          <ListProductCard products={products!} variant="recommend" />
        ) : (
          <Loading className="recommend-loading" />
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
