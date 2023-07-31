const sizes = {
  small: 'px-2 py-1 border-0 rounded-md text-white text-sm m-2',
  medium: 'px-3 py-1 border-0 rounded-md text-white text-md font-semibold m-2',
};

const colors = {
  none: 'bg-transparent',
  blue: 'bg-blue-500',
  teal: 'bg-teal-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  orage: 'bg-orange-500',
  indigo: 'bg-indigo-500',
};

const textColor = {
  black: 'text-black',
  white: 'text-white',
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
      className={`${sizes[size]} ${colors[color]} ${textColor[text]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
