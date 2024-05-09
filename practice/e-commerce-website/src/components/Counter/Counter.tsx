import React, { useState } from 'react';
import './Counter.css'

export default function Counter({firstQuantity}: {firstQuantity: number}) {
  const [count, setCount] = useState(firstQuantity)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  return (
    <div className="product-counter">
        <button className='btn-counter' onClick={handleDecrease} disabled={(count <= 1)}>-</button>
        <p>{count}</p>
        <button className='btn-counter' onClick={handleIncrease}>+</button>
    </div>
  )
}