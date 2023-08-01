import { colors } from '../constant/bg-color';
import { textColors } from '../constant/text-colors';

const sizes = {
  small: 'px-2 py-1 border-0 rounded-sm text-sm m-2',
  medium: 'px-3 py-1 border-0 rounded-sm text-md font-semibold m-2',
};

export default function Button({
  onClick,
  children,
  size = 'small',
  color = 'none',
  type = '',
  text = 'black',
}) {
  return (
    <button
      className={`${sizes[size]} ${colors[color]} ${textColors[text]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
