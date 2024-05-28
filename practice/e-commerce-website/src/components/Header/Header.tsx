/*Import hooks*/
import { Link } from 'react-router-dom';
/*Import constants*/
import { TEXT_VARIANTS, COMPONENT_SIZES } from '../../constants';
/*Import components*/
import { CloseIcon, SearchIcon, CartIcon, AccountIcon } from '../Icon';
import Text from '../Text/Text';
import InputField from '../InputField/InputField';
import { NavBar } from '../Nav/Nav';
/*Import CSS*/
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="discount-notification">
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
      <div className="container">
        <div className="header">
          <Link to={'/'}>
            <h1 className="header-logo">
              <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.small}>
                shop.co
              </Text>
            </h1>
          </Link>
          <NavBar />
          <InputField icon={<SearchIcon />} placeholder="Search for products..." />
          <div className="header-icons">
            <Link to={'/cart'}>
              <CartIcon />
            </Link>
            <Link to={'/account'}>
              <AccountIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
