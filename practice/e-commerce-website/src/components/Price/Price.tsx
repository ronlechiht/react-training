import React from 'react';
import './Price.css';

function Discount({ discount }: { discount: number }) {
  if (discount) {
    return <span className="product-discount">-{discount}%</span>;
  }
}

export default function Rating({ price, discount }: { price: number; discount: number }) {
  return (
    <div className="product-price">
      <span className="price-reduced">${(price * (100 - discount)) / 100}</span>
      {discount ? <span className="price-origin">${price}</span> : null}
      <Discount discount={discount}></Discount>
    </div>
  );
}
