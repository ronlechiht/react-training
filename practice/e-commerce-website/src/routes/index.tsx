import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../layouts';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:productId" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
  )
);

export default router;
