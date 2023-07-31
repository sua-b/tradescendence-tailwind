const sizes = {
  small: 'px-3 py-1 border-0 rounded-lg text-white text-md m-2',
  medium: 'px-3 py-1 border-0 rounded-lg text-white text-xl font-semibold m-2',
};

const colors = {
  blue: 'bg-blue-500',
  teal: 'bg-teal-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  orage: 'bg-orange-500',
};

export default function Button({
  onClick,
  children,
  size = 'small',
  color = 'blue',
  type = '',
}) {
  return (
    <button
      className={`${sizes[size]}  ${colors[color]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
