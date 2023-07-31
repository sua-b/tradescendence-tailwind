import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink className='h-10 py-1 px-3 flex items-start' to='/'>
      <img className='h-10' src='/icon.png' alt='logo' />
      <span className='text-lg font-bold text-blue-700 m-1'>
        Tradescendence
      </span>
    </NavLink>
  );
}
