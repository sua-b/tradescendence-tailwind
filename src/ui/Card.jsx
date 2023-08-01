import { NavLink, useLocation } from 'react-router-dom';

export default function Card({ children, id }) {
  //see url location
  const location = useLocation();

  return (
    <li className='hover:scale-105 h-auto overflow-clip transition-all relative group/card'>
      <NavLink to={`${location.pathname === '/' ? 'blogs/' + id : id}`}>
        {children}
      </NavLink>
    </li>
  );
}

function Image({ src, alt }) {
  return <img className='h-48 w-full object-cover' src={src} alt={alt} />;
}

function Title({ children }) {
  return (
    <div className='h-36 w-full py-1 px-2 text-center text-md text-white bg-stone-900 bg-opacity-90 absolute top-2/3 transition-all group-hover/card:top-1/3'>
      {children}
    </div>
  );
}

Card.Image = Image;
Card.Title = Title;
