/*Import CSS*/
import './Dropdown.css';
/*Import components*/
import { DownArrowIcon } from '../Icon';

const Dropdown = ({ label, options }: { label: string; options: React.ReactNode[] }) => {
  return (
    <div className="dropdown">
      <p className="btn-dropdown">
        {label}
        <DownArrowIcon />
      </p>
      <div className="dropdown-menu">
        {options.map((option) => (
          <>{option}</>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
