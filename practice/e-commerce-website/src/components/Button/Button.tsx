/* Import constants */
import { BUTTON_VARIANTS } from '../../constants';
import { COMPONENT_SIZES } from '../../constants';
/*Import CSS*/
import './Button.css';

/**
 *
 * @param variant Type of button
 * @param size Size of button (sm=Small, md=Medium, lg=Large)
 * @param label Text display in button
 * @returns Button component
 */
const Button = ({
  variant,
  size,
  label
}: {
  variant?: BUTTON_VARIANTS;
  size?: COMPONENT_SIZES;
  label: string;
}) => {
  return (
    <button
      className={`btn ${variant ? `btn-${variant}` : 'btn-primary'} ${size ? `btn-${size}` : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
