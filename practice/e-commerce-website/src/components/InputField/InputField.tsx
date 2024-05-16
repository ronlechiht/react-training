/* Import CSS */
import './InputField.css';

const InputField = ({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) => {
  return (
    <div className="input-field">
      {icon}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
