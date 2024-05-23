/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import CSS */
import './Text.css';

const Text = ({
  variant = TEXT_VARIANTS.default,
  size = COMPONENT_SIZES.default,
  className = '',
  children
}: {
  variant?: TEXT_VARIANTS;
  size?: COMPONENT_SIZES;
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={`text-${variant} text-${variant}-${size} ${className}`}>{children}</p>;
};

export default Text;
