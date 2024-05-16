/* Import constants */
import { BUTTON_VARIANTS, COMPONENT_SIZES } from '../../constants';
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
  icon,
  label
}: {
  variant?: BUTTON_VARIANTS;
  size?: COMPONENT_SIZES;
  icon?: React.ReactNode;
  label: string;
}) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`}>
      {label}
      {icon && icon}
    </button>
  );
};

Button.defaultProps = {
  variant: BUTTON_VARIANTS.primary,
  size: COMPONENT_SIZES.small
};

export default Button;
