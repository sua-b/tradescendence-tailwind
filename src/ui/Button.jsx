export default function Button({ onClick, children }) {
  return (
    <button
      className='w-28 p-1 border-0 rounded-md shadow-md text-white bg-blue-500 text-lg  shadow-blue-400 m-2'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
