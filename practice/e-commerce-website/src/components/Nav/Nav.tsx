/*Import types*/
import { LinkProps } from '../../types/LinkProps';
/*Import components*/
import Dropdown from '../Dropdown/Dropdown';
/*Import CSS*/
import './Nav.css';

export const NavMenuItem = ({ label, path }: LinkProps) => {
  return (
    <li className="nav-menu-item">
      <a href={path}>{label}</a>
    </li>
  );
};

export const NavBar = () => {
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

export const FooterNavList = ({ linkProps }: { linkProps: LinkProps[] }) => {
  return (
    <ul className="footer-nav-list">
      {linkProps.map((linkProp) => (
        <NavMenuItem label={linkProp.label} path={linkProp.path} />
      ))}
    </ul>
  );
};
