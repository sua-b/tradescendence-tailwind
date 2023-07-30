export default function Card({ children }) {
  return (
    <li className='w-52 rounded-lg shadow-lg shadow-gray-300 hover:scale-110 transition-all grid grid-rows-[3fr_1fr_3_1fr] grid-cols-1 place-items-center'>
      {children}
    </li>
  );
}

function Image({ src, alt }) {
  return (
    <img className='h-40 w-52 object-cover rounded-t-lg' src={src} alt={alt} />
  );
}

function Title({ children }) {
  return (
    <h2 className='text-center h-14 w-full text-sm font-semibold p-2 bg-gray-100 flex items-center justify-center'>
      {children}
    </h2>
  );
}
function Author({ children }) {
  return (
    <p className='text-center text-sm text-gray-500 truncate w-52 px-4'>
      {children}
    </p>
  );
}

function Body({ children }) {
  return <p className='text-sm h-36 overflow-clip px-4 border-b'>{children}</p>;
}

Card.Image = Image;
Card.Title = Title;
Card.Body = Body;
Card.Author = Author;
