import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
