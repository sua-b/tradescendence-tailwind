import { NavLink } from 'react-router-dom';

const logoBase = 'h-10 flex items-center';
const logoMd = 'md:h-16 md:mx-4';

export default function Logo() {
  return (
    <NavLink className={`${logoBase} ${logoMd}`} to='/'>
      <img className='h-2/3 m-1' src='/icon.png' alt='logo' />
      <span className='text-xl font-bold text-blue-700 m-1'>
        Tradescendence
      </span>
    </NavLink>
  );
}
