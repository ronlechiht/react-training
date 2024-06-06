/* Import constants*/
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';
/* Import components */
import Text from '../Text/Text';
import Divider from '../Divider';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import { DiscountIcon, RightArrowIcon } from '../Icon';
/* Import helpers */
import { calcDiscount, calcSummaryTotal } from '../../helpers/calcPrice';
/* Import CSS */
import './CartSummary.css';

const CartSummary = ({
  subtotal,
  discount,
  deliveryFee
}: {
  subtotal: number;
  discount: number;
  deliveryFee: number;
}) => {
  return (
    <div className="cart-summary">
      <Text variant={TEXT_VARIANTS.name} className="cart-summary-title">
        order summary
      </Text>
      <div className="cart-summary-props">
        <Text>
          Subtotal<span>${subtotal}</span>
        </Text>
        <Text className="cart-summary-discount">
          Discount (-{discount}%)`<span>-${calcDiscount(subtotal, discount)}</span>
        </Text>
        <Text>
          Delivery Fee<span>${deliveryFee}</span>
        </Text>
        <Divider />
        <Text className="cart-summary-total">
          Total
          <span>${calcSummaryTotal(subtotal, calcDiscount(subtotal, discount), deliveryFee)}</span>
        </Text>
      </div>
      <div className="promo-input">
        <InputField icon={<DiscountIcon />} placeholder="Add promo code" />
        <Button size={COMPONENT_SIZES.small} label={'Apply'} />
      </div>
      <Button size={COMPONENT_SIZES.large} label={'Go to Checkout'} icon={<RightArrowIcon />} />
    </div>
  );
};

export default CartSummary;
