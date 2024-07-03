import './Snackbar.css';

const Snackbar = ({ open, message }: { open: boolean; message: string }) => {
  return <div className={`snackbar ${open ? 'show' : ''}`}>{message}</div>;
};

export default Snackbar;
