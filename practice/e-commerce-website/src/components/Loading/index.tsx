import './index.css';

const Loading = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex-center-center ${className}`}>
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
