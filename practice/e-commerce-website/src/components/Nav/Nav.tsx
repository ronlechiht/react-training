/*Import types*/
import { LinkProps } from '../../types/LinkProps';
/*Import components*/
import Dropdown from '../Dropdown/Dropdown';
/*Import CSS*/
import './Nav.css';

export const NavMenuItem = ({ label, path }: LinkProps) => {
  return <a href={path}>{label}</a>;
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
        <li className="nav-menu-item">
          <NavMenuItem label="on sale" path="#" />
        </li>
        <li className="nav-menu-item">
          <NavMenuItem label="new arrivals" path="#" />
        </li>
        <li className="nav-menu-item">
          <NavMenuItem label="brands" path="#" />
        </li>
      </ul>
    </nav>
  );
};

export const FooterNavList = ({ linkProps }: { linkProps: LinkProps[] }) => {
  return (
    <ul className="footer-nav-list">
      {linkProps.map((linkProp, index) => (
        <li className="nav-menu-item" key={index}>
          <NavMenuItem label={linkProp.label} path={linkProp.path} />
        </li>
      ))}
    </ul>
  );
};
