/*Import hook*/
import { useState } from 'react';
/*Import CSS*/
import './Quantity.css';

/**
 *
 * @param firstQuantity quantity value when init
 * @param size size of Quantity
 * @returns Quantity component
 */
const Quantity = ({ firstQuantity, size }: { firstQuantity: number; size: 'sm' | 'lg' }) => {
  const [count, setCount] = useState(firstQuantity);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className={`product-quantity product-quantity-${size}`}>
      <button
        className={`btn-quantity btn-quantity-${size}`}
        onClick={handleDecrease}
        disabled={count <= 1}
      >
        -
      </button>
      {count}
      <button className={`btn-quantity btn-quantity-${size}`} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default Quantity;
