import { useNavigate } from 'react-router-dom';
/*Import constants*/
import { COMPONENT_SIZES, TEXT_VARIANTS, ROUTES } from '../../constants';
/*Import components*/
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
/*Import CSS*/
import './index.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-3);
  const handleGoHome = () => navigate(ROUTES.homePage);
  return (
    <div className="flex-center-center error-page-container">
      <div className="flex-col error-page">
        <Text variant={TEXT_VARIANTS.title} size={COMPONENT_SIZES.large}>
          oops!
        </Text>
        <Text className="error-page-message">Sorry, an unexpected error has occurred.</Text>
        <div className="flex-row">
          <Button label="Go Back" className="btn-go-back" onClick={handleGoBack} />
          <Button label="Go Home" className="btn-go-home" onClick={handleGoHome} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
