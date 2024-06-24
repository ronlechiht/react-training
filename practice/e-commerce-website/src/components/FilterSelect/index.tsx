/* Import CSS */
import './index.css';

const FilterSelect = ({ options, handler }: { options: string[]; handler: CallableFunction }) => {
  return (
    <div className="filter-type">
      {options.map((option) => (
        <div className="type-option" key={option} onClick={handler(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default FilterSelect;
