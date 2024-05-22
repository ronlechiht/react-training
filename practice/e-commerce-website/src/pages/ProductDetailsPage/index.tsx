import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { ProductService } from '../../services/ProductService';
import './index.css'

const getProduct = () => {
    const service = new ProductService();
    const params = useParams();
    const productId = params.productId!;
    const productItem = service.getProductById(productId)

    return productItem
}




const ProductDetailsPage = () => {
    const product = {
        productId: '10',
        imageIndexs: ['01', '02', '03'],
        productName: 'One Life Graphic T-Shirt',
        productRating: 4.5,
        productPrice: 300,
        productDiscount: 40,
        productDesc:
          'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
        productColors: ['judge-grey', 'stromboli', 'martinique'],
        productSizes: ['small', 'medium', 'large', 'x-large'],
        sold: 10
      }
  return (
    <div className="product-details-page-body">
      <ProductDetails {...product}/>
    </div>
  );
};

export default ProductDetailsPage;
