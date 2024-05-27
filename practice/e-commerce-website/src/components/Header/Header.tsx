import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const homePage = () => {
    navigate('/');
  };
  const cartPage = () => {
    navigate('/cart');
  };
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
          <h1 className="header-logo" onClick={homePage}>
            <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.small}>
              shop.co
            </Text>
          </h1>
          <NavBar />
          <InputField icon={<SearchIcon />} placeholder="Search for products..." />
          <div className="header-icons">
            <button onClick={cartPage}>
              <CartIcon />
            </button>
            <button>
              <AccountIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
