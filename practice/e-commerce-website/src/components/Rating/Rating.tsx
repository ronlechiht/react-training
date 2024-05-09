import React from 'react';
import './Rating.css';

export default function Rating({ rating, size }: { rating: number, size: 'sm'|'lg' }) {
  return <div className={["rating-stars", `rating-stars-${size}`].join(' ')} style={{ '--rating': rating } as React.CSSProperties}></div>;
}
