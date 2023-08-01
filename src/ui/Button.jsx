import { colors } from '../constant/bg-color';
import { textColors } from '../constant/text-colors';

const sizes = {
  small: 'h-7 px-2 py-1 m-2 text-sm',
  medium: 'h-9 px-3 py-1 m-2 text-md',
};

export default function Button({
  children,
  onClick,
  disabled,
  type = '',
  color = 'none',
  text = 'black',
  size = 'small',
}) {
  return (
    <button
      className={`${sizes[size]} ${colors[color]} ${textColors[text]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
