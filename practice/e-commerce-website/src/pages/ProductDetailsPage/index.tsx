import ProductDetails from '../../components/ProductDetails/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <div className="page-body container">
      <ProductDetails
        productId="10"
        imageIndexs={['01', '02', '03']}
        productName="One Life Graphic T-Shirt"
        productRating={4.5}
        productPrice={300}
        productDiscount={40}
        productDesc="This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
        productColors={['judge-grey', 'stromboli', 'martinique']}
        productSizes={['small', 'medium', 'large', 'x-large']}
        sold={10}
      />
    </div>
  );
};

export default ProductDetailsPage;
