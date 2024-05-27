/*Import CSS*/
import './Dropdown.css';
/*Import components*/
import { DownArrowIcon } from '../Icon';
import Text from '../Text/Text';

const Dropdown = ({ label, options }: { label: string; options: React.ReactNode[] }) => {
  return (
    <div className="dropdown">
      <Text className="btn-dropdown">
        {label}
        <DownArrowIcon />
      </Text>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
