import { useState } from 'react';
import {
  LiaBarsSolid,
  LiaBookOpenSolid,
  LiaHomeSolid,
  LiaInfoCircleSolid,
} from 'react-icons/lia';
import { NavLink } from 'react-router-dom';

const menuItem = 'flex items-center justify-end gap-2';

export default function NavMenu() {
  const [isToggle, setIsToggle] = useState(false);

  function handleClick() {
    setIsToggle((isToggle) => !isToggle);
  }

  return (
    <div>
      <button
        className='text-blue-700 ring md:hidden p-1 rounded-md fixed top-2 right-2 text-3xl'
        onClick={handleClick}
      >
        <LiaBarsSolid />
      </button>
      {isToggle && (
        <ul className='fixed top-14 left-0 bg-gray-100 w-screen flex flex-col justify-center text-right text-[1.1rem] leading-10 px-4 h-32 divide-y divide-stone-400'>
          <li>
            <NavLink to='/' onClick={handleClick} className={menuItem}>
              <LiaHomeSolid />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/blogs' onClick={handleClick} className={menuItem}>
              <LiaBookOpenSolid />
              <span>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={handleClick} className={menuItem}>
              <LiaInfoCircleSolid />
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
