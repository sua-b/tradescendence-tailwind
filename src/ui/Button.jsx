import { colors } from '../constant/bg-color';
import { colors as colorsHover } from '../constant/bg-color-hover';
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
  const styles = ` ${sizes[size]} ${colors[color]} ${textColors[text]} ${colorsHover[color]} transition`;

  return (
    <button
      className={styles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
