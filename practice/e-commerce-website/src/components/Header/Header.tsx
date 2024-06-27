/*Import hooks*/
import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
/*Import constants*/
import { ROUTES } from '../../constants';
/*Import components*/
import { CloseIcon, SearchIcon, CartIcon, AccountIcon } from '../Icon';
import Text from '../Text/Text';
import InputField from '../InputField/InputField';
import Logo from '../Logo';
import { NavBar } from '../Nav/Nav';
/*Import CSS*/
import './Header.css';

const Header = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return null;
  }
  const { state } = cartContext;

  return (
    <header>
      <div className="discount-notification">
        <div className="container">
          <Text className="notification-msg">
            Sign up and get 20% off to your first order.{' '}
            <a href="#" className="sign-up-link">
              Sign Up Now
            </a>
          </Text>
          <button className="btn-close">
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <Logo className="header-logo" />
          <NavBar />
          <InputField icon={<SearchIcon />} placeholder="Search for products..." />
          <div className="header-icons">
            <Link to={ROUTES.cartPage}>
              <CartIcon />
              <span className="cart-quantity">{state.countItems}</span>
            </Link>
            <Link to={ROUTES.accountPage}>
              <AccountIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
