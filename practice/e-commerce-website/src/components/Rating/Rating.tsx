import React from 'react';
/* Import constants */
import { COMPONENT_SIZES } from '../../constants/constants';
/*Import CSS*/
import './Rating.css';

/**
 *
 * @param rating rating of product (0->5)
 * @param size size of rating stars
 * @returns Rating component
 */
const Rating = ({ rating, size }: { rating: number; size: COMPONENT_SIZES }) => {
  return (
    <div
      className={['rating-stars', `rating-stars-${size}`].join(' ')}
      style={{ '--rating': rating } as React.CSSProperties}
    />
  );
};

export default Rating;
