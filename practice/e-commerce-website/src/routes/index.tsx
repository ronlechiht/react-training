import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ROUTES } from '../constants';
import Layout from '../layouts';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route path={ROUTES.homePage} element={<HomePage />} />
        <Route path={`${ROUTES.detailsPage}/:productId`} element={<ProductDetailsPage />} />
        <Route path={ROUTES.cartPage} element={<CartPage />} />
      </Route>
      <Route path={ROUTES.errorPage} element={<ErrorPage />} />
    </Route>
  )
);

export default router;
