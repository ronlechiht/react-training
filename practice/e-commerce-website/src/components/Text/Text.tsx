/* Import constants */
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import CSS */
import './Text.css';

const Text = ({
  variant,
  size,
  className,
  content
}: {
  variant: TEXT_VARIANTS;
  size?: COMPONENT_SIZES;
  className?: string;
  content: string;
}) => {
  return (
    <p
      className={`text-${variant} text-${variant}-${size ? size : 'default'} ${className ? className : ''}`}
    >
      {content}
    </p>
  );
};

export default Text;
