import { NavLink } from 'react-router-dom';

export default function Logo({ src, children, className }) {
  return (
    <NavLink className='h-auto py-1 px-3 flex items-start' to='/'>
      <img className={className} src={src} alt='logo' />
      {children}
    </NavLink>
  );
}
