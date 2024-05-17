/*Import constants*/
import { TEXT_VARIANTS, COMPONENT_SIZES } from '../../constants';
/*Import components*/
import { CloseIcon, SearchIcon, CartIcon, AccountIcon } from '../Icon';
import Text from '../Text/Text';
import InputField from '../InputField/InputField';
import Dropdown from '../Dropdown/Dropdown';
/*Import CSS*/
import './Header.css';

export const NavMenuItem = ({ label, path }: { label: string; path: string }) => {
  return (
    <li className="nav-menu-item">
      <a href={path}>{label}</a>
    </li>
  );
};

const NavBar = () => {
  const options = [
    <NavMenuItem label="option 1" path="#" />,
    <NavMenuItem label="option 2" path="#" />
  ];
  return (
    <nav>
      <ul className="nav-menu-list">
        <Dropdown label="shop" options={options} />
        <NavMenuItem label="on sale" path="#" />
        <NavMenuItem label="new arrivals" path="#" />
        <NavMenuItem label="brands" path="#" />
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <div className="discount-notification">
        <p className="notification-msg">
          Sign up and get 20% off to your first order.{' '}
          <a href="#" className="sign-up-link">
            Sign Up Now
          </a>
        </p>
        <button className="btn-close">
          <CloseIcon />
        </button>
      </div>
      <div className="container">
        <div className="header">
          <h1 className="header-logo">
            <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.small} content="shop.co" />
          </h1>
          <NavBar />
          <InputField icon={<SearchIcon />} placeholder="Search for products..." />
          <div className="header-icons">
            <button>
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
