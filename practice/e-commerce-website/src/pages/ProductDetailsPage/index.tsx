/* Import constants */
import { BUTTON_VARIANTS, COMPONENT_SIZES, QUERY_PARAM_KEYS, TEXT_VARIANTS } from '../../constants';
/* Import types */
import { QueryParams } from '../../types/QueryParams';
/* Import components */
import ListFeedback from '../../components/ListFeedback/ListFeedback';
import ListProductCard from '../../components/ListProductCard/ListProductCard';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Tabs from '../../components/Tabs';
import Text from '../../components/Text/Text';
import { FilterIcon } from '../../components/Icon';
import Button from '../../components/Button/Button';
/* Import services */
import { ProductService } from '../../services/ProductService';
/* Import CSS */
import './index.css';

const service = new ProductService();
const product = await service.getProductById('10');
const feedbacks = product.feedbacks;
const params: QueryParams = {
  [QUERY_PARAM_KEYS.limit]: 4
};
const recommendProduct = await service.getProducts(params);

const ProductDetailsPage = () => {
  const informationTabs = ['product details', 'rating & reviews', 'FAQs'];
  return (
    <div className="product-details-page-body">
      <ProductDetails {...product} />
      <Tabs tabs={informationTabs} />
      <div className="rating-feedback-tab">
        <div className="list-feedback-header">
          <Text className="feedbacks-title">
            <span>all reviews </span>({feedbacks.length})
          </Text>
          <div className="feedback-filter-select">
            <FilterIcon alternative />
          </div>
          <select className="sort-option-list feedback-sort-select">
            <option value="latest">Latest</option>
          </select>
          <Button label="Write a Review" />
        </div>
        <ListFeedback feedbacks={feedbacks} />
        <Button
          variant={BUTTON_VARIANTS.outline}
          label="Load More Reviews"
          className="btn-load-reviews"
        />
      </div>
      <div className="recommend-product">
        <Text
          variant={TEXT_VARIANTS.title}
          size={COMPONENT_SIZES.large}
          className="recommend-product-title"
        >
          you might also like
        </Text>
        <ListProductCard products={recommendProduct} variant="recommend" />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
