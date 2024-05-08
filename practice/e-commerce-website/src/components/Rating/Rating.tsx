import React from 'react';
import './Rating.css';

export default function Rating({ rating }: { rating: number }) {
  return <div className="rating-stars" style={{ '--rating': rating } as React.CSSProperties}></div>;
}
