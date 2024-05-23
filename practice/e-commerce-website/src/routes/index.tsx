import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
