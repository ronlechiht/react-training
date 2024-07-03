import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { SnackbarProvider } from '../hooks/useSnackbar';
import { CartProvider } from '../hooks/useCart';

const Layout = () => {
  return (
    <CartProvider>
      <SnackbarProvider>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </SnackbarProvider>
    </CartProvider>
  );
};

export default Layout;
