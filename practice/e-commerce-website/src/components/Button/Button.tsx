import './Button.css';

export default function Button({
  color,
  size,
  label
}: {
  color: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  label: string;
}) {
  return <button className={['btn', `btn-${size}`, `btn-${color}`].join(' ')}>{label}</button>;
}
