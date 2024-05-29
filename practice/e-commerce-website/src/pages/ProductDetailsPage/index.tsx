/* Import hooks */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* Import constants */
import { BUTTON_VARIANTS, COMPONENT_SIZES, QUERY_PARAM_KEYS, TEXT_VARIANTS } from '../../constants';
/* Import types */
import { Product } from '../../types/Procduct';
import { Feedback } from '../../types/Feedback';
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
import { ProductService } from '../../services/ProductService';
/* Import CSS */
import './index.css';

const ProductDetailsPage = () => {
  const service = new ProductService();
  const productId = useParams().productId!;
  const [product, setProduct] = useState<Product>();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>();
  const [recommendProduct, setRecommendProduct] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response1 = await service.getProductById(productId);
      const response2 = await service.getProducts({ [QUERY_PARAM_KEYS.limit]: 4 });
      setProduct(response1);
      setFeedbacks(response1.feedbacks);
      setRecommendProduct(response2);
      setIsLoading(false);
    };
    fetchData();
  }, [productId]);
  const informationTabs = ['product details', 'rating & reviews', 'FAQs'];

  return (
    <div className="product-details-page-body">
      {!isLoading ? (
        <ProductDetails {...product!} />
      ) : (
        <Loading className="product-details-loading" />
      )}
      <Tabs tabs={informationTabs} />
      <div className="rating-feedback-tab">
        <div className="list-feedback-header">
          <Text className="feedbacks-title">
            <span>all reviews </span>({feedbacks ? feedbacks.length : 0})
          </Text>
          <div className="feedback-filter-select">
            <FilterIcon alternative />
          </div>
          <select className="sort-option-list feedback-sort-select">
            <option value="latest">Latest</option>
          </select>
          <Button label="Write a Review" />
        </div>
        {!isLoading ? (
          <>
            <ListFeedback feedbacks={feedbacks!} />
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
        {!isLoading ? (
          <ListProductCard products={recommendProduct!} variant="recommend" />
        ) : (
          <Loading className="recommend-loading" />
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
