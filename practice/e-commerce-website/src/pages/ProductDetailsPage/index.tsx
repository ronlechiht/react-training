import ListFeedback from '../../components/ListFeedback/ListFeedback';
import ListProductCard from '../../components/ListProductCard/ListProductCard';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Tabs from '../../components/Tabs';
import { ProductService } from '../../services/ProductService';
import { QUERY_PARAM_KEYS } from '../../constants';
import './index.css';
import { QueryParams } from '../../types/QueryParams';

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
        <ListFeedback feedbacks={feedbacks} />
      </div>
      <div className="recommend-product">
        <ListProductCard products={recommendProduct} variant="recommend" />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
