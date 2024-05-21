/*Import components*/
import Dropdown from '../Dropdown/Dropdown';
/*Import CSS*/
import './NavBar.css';

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

export default NavBar;
