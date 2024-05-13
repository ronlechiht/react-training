/* Inport CSS */
import './InputRadio.css';

const ColorOption = ({ color }: { color: string }) => {
  return (
    <>
      <input type="radio" name="color" id={color} className="color-radio" />
      <label htmlFor={color} className="color-option">
        <div
          className="color-circle"
          style={{ '--color': `var(--${color})` } as React.CSSProperties}
        />
      </label>
    </>
  );
};

const SizeOption = ({ size }: { size: string }) => {
  return (
    <>
      <input type="radio" name="size" id={size} className="size-radio" />
      <label htmlFor={size} className="size-option">
        {size}
      </label>
    </>
  );
};

const ListColor = ({ options }: { options: string[] }) => {
  return (
    <div className="list-color">
      {options.map((option) => (
        <ColorOption color={option} key={option} />
      ))}
    </div>
  );
};

const ListSize = ({ options }: { options: string[] }) => {
  return (
    <div className="list-size">
      {options.map((option) => (
        <SizeOption size={option} key={option} />
      ))}
    </div>
  );
};

const InputRadio = ({ variant, options }: { variant: 'color' | 'size'; options: string[] }) => {
  return variant === 'color' ? <ListColor options={options} /> : <ListSize options={options} />;
};

export default InputRadio;
