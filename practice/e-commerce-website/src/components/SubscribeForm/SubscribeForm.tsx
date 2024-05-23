/*Import constants*/
import { COMPONENT_SIZES, TEXT_VARIANTS, BUTTON_VARIANTS } from '../../constants';
/*Import components*/
import Button from '../Button/Button';
import Text from '../Text/Text';
import InputField from '../InputField/InputField';
import { MailIcon } from '../Icon';
/*Import CSS*/
import './SubscribeForm.css';

const SubscribeForm = () => {
  return (
    <div className="subscribe-form">
      <Text
        variant={TEXT_VARIANTS.title}
        size={COMPONENT_SIZES.large}
        className="subscribe-form-title"
      >
        stay upto date about our latest offers
      </Text>
      <div className="subscribe-form-control">
        <InputField icon={<MailIcon />} placeholder="Enter your email address" />
        <Button variant={BUTTON_VARIANTS.secondary} label="Subscribe to Newsletter" />
      </div>
    </div>
  );
};

export default SubscribeForm;
