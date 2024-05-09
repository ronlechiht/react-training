import React from 'react';
import './Price.css';

function Discount({ discount, size }: { discount: number; size: 'sm' | 'lg' }) {
  if (discount) {
    return (
      <span className={['product-discount', `product-discount-${size}`].join(' ')}>
        -{discount}%
      </span>
    );
  }
}

export default function Price({
  price,
  discount,
  size
}: {
  price: number;
  discount: number;
  size: 'sm' | 'lg';
}) {
  return (
    <div className={['product-price', `product-price-${size}`].join(' ')}>
      <span className="price-reduced">${Math.round  ((price * (100 - discount)) / 100)}</span>
      {discount ? <span className="price-origin">${price}</span> : null}
      <Discount discount={discount} size={size}></Discount>
    </div>
  );
}
