import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { CartProvider } from '../hooks/useCart';

const Layout = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </CartProvider>
  );
};

export default Layout;
