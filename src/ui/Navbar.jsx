import { NavLink } from 'react-router-dom';
import {
  LiaHomeSolid,
  LiaBookOpenSolid,
  LiaInfoCircleSolid,
} from 'react-icons/lia';

export default function Navbar() {
  return (
    <nav className='justify-end items-center hidden md:flex'>
      <ul className='invisible md:visible flex gap-2'>
        <li>
          <NavLink to='/' className={menuItem}>
            <LiaHomeSolid />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/blogs' className={menuItem}>
            <LiaBookOpenSolid />
            <span>Blogs</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={menuItem}>
            <LiaInfoCircleSolid />
            <span>About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const menuItem =
  'flex items-center gap-2 text-xl p-2 rounded-md hover:bg-gray-200  aria-[current=page]:bg-gray-200';
