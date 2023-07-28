import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='bg-gray-100 py-0 px-8 h-20 col-span-2 grid grid-cols-[auto_1fr_auto] grid-rows-[5rem] sticky top-0'>
      <NavLink className='flex items-center gap-2 pr-4 mr-4' to='/'>
        <img className='h-14' src='/icon.png' alt='logo' />
        <span className='text-xl font-bold text-blue-700'>Tradescendence</span>
      </NavLink>
      <Navbar />
    </header>
  );
}
