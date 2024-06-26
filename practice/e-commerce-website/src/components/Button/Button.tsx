/* Import constants */
import { MouseEventHandler } from 'react';
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
  variant = BUTTON_VARIANTS.primary,
  size = COMPONENT_SIZES.small,
  icon,
  label,
  className = '',
  onClick
}: {
  variant?: BUTTON_VARIANTS;
  size?: COMPONENT_SIZES;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <button className={`btn btn-${variant} btn-${size} ${className}`} onClick={onClick}>
      {label}
      {icon && icon}
    </button>
  );
};

export default Button;
