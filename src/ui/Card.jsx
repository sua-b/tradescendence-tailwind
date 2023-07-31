import { NavLink } from 'react-router-dom';

export default function Card({ children, id, className = '' }) {
  return (
    <NavLink to={`${id}`} className={className}>
      <li className='hover:scale-110 h-auto relative overflow-hidden group/card transition-all'>
        {children}
      </li>
    </NavLink>
  );
}

function Image({ src, alt, className = '' }) {
  return (
    <img
      className={`h-40 w-full object-cover ${className}`}
      src={src}
      alt={alt}
    />
  );
}

function Title({ children }) {
  return (
    <div className='text-white text-sm text-center p-1 h-40 w-full bg-zinc-900 absolute top-[70%] group-hover/card:top-[40%] transition-all'>
      {children}
    </div>
  );
}

function Author({ children }) {
  return (
    <p className='text-center text-sm text-gray-500 truncate w-full px-4'>
      {children}
    </p>
  );
}

function Body({ children }) {
  return <p className='text-sm overflow-clip px-4 border-b'>{children}</p>;
}

Card.Image = Image;
Card.Title = Title;
Card.Body = Body;
Card.Author = Author;
