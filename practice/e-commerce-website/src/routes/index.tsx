import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:productId" element={<ProductDetailsPage/>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
