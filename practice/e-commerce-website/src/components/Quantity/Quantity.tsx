/*Import hook*/
import { useState } from 'react';
/* Import constants */
import { COMPONENT_SIZES } from '../../constants';
/*Import components*/
import Text from '../Text/Text';
/*Import CSS*/
import './Quantity.css';

/**
 *
 * @param firstQuantity quantity value when init
 * @param size size of Quantity
 * @returns Quantity component
 */
const Quantity = ({
  firstQuantity,
  size,
  change
}: {
  firstQuantity: number;
  size: COMPONENT_SIZES;
  change?: Function;
}) => {
  const [count, setCount] = useState(firstQuantity);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    change && change(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    change && change(newCount);
  };

  return (
    <div className={`product-quantity product-quantity-${size}`}>
      <button
        className={`btn-quantity btn-quantity-${size} btn-quantity-decrease`}
        onClick={handleDecrease}
        disabled={count <= 1}
      >
        -
      </button>
      <Text className="product-quantity-value">{count}</Text>
      <button
        className={`btn-quantity btn-quantity-${size} btn-quantity-increase`}
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
