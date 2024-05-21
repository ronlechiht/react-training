/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import CSS */
import './Text.css';

const Text = ({
  variant,
  size,
  className,
  children
}: {
  variant?: TEXT_VARIANTS;
  size?: COMPONENT_SIZES;
  className?: string;
  children: string;
}) => {
  return <p className={`text-${variant} text-${variant}-${size} ${className}`}>{children}</p>;
};

Text.defaultProps = {
  variant: 'default',
  size: 'default',
  className: ''
};

export default Text;
