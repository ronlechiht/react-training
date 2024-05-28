import './index.css';

const Loading = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`loader-container ${className}`}>
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
