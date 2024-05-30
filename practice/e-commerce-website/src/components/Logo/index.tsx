import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import { TEXT_VARIANTS, COMPONENT_SIZES, ROUTES } from '../../constants';

const Logo = ({ className = '' }: { className: string }) => {
  return (
    <Link to={ROUTES.homePage}>
      <h1 className={className}>
        <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.small}>
          shop.co
        </Text>
      </h1>
    </Link>
  );
};

export default Logo;
