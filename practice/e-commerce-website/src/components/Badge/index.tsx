import './index.css';

const Badge = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <span className="badge">
      <img src={`/assets/images/${url}`} alt={alt} />
    </span>
  );
};

export default Badge;
