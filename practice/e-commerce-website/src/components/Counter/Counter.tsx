import React, { useState } from 'react';
import './Counter.css';

export default function Counter({
  firstQuantity,
  size
}: {
  firstQuantity: number;
  size: 'sm' | 'lg';
}) {
  const [count, setCount] = useState(firstQuantity);

  const btnCounterClass = ['btn-counter', `btn-counter-${size}`].join(' ');

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div className={['product-counter', `product-counter-${size}`].join(' ')}>
      <button className={btnCounterClass} onClick={handleDecrease} disabled={count <= 1}>
        -
      </button>
      <p>{count}</p>
      <button className={btnCounterClass} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
