import { NavLink } from 'react-router-dom';

const menuItem =
  'text-md px-2 text-zinc-500 hover:text-zinc-800 aria-[current=page]:text-blue-700 aria-[current=page]:font-semibold';

export default function Navbar() {
  return (
    <nav className='px-3 flex justify-start md:justify-end md:items-center'>
      <ul className='flex gap-2'>
        <li>
          <NavLink to='/' className={menuItem}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/blogs' className={menuItem}>
            <span>Blogs</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={menuItem}>
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/manage' className={menuItem}>
            <span>Manage</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
