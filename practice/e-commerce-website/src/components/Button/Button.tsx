import React from 'react';
import './Button.css';

export default function Button({
  primaryColor,
  size,
  label
}: {
  primaryColor: boolean;
  size: 'sm' | 'md' | 'lg';
  label: string;
}) {
  const mode = primaryColor ? 'btn-primary' : 'btn-secondary';
  return <button className={['btn', `btn-${size}`, mode].join(' ')}>{label}</button>;
}
