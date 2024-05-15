/* Import constants */
import { INPUT_RADIO_VARIANTS } from '../../constants';
/* Inport CSS */
import './InputRadio.css';

/**
 *
 * @param color color name string red || green || blue || judge-grey || stromboli || martinique
 * @returns input radio of a color
 */
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

/**
 *
 * @param size size name string Small || Medium || Large || X-Large
 * @returns input radio of a size
 */
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

/**
 *
 * @param options list option of color
 * @returns list input radio of color
 */
const ListColor = ({ options }: { options: string[] }) => {
  return (
    <>
      <p className="select-title">Select Colors</p>
      <div className="list-color">
        {options.map((option) => (
          <ColorOption color={option} key={option} />
        ))}
      </div>
    </>
  );
};

/**
 *
 * @param options list option of size
 * @returns list input radio of size
 */
const ListSize = ({ options }: { options: string[] }) => {
  return (
    <>
      <p className="select-title">Choose Size</p>
      <div className="list-size">
        {options.map((option) => (
          <SizeOption size={option} key={option} />
        ))}
      </div>
    </>
  );
};

/**
 *
 * @param variant type of input radio (color || size)
 * @returns Color select section or Size select section
 */
const InputRadio = ({ variant, options }: { variant: INPUT_RADIO_VARIANTS; options: string[] }) => {
  return variant === INPUT_RADIO_VARIANTS.color ? (
    <ListColor options={options} />
  ) : (
    <ListSize options={options} />
  );
};

export default InputRadio;
