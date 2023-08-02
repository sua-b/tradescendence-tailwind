import { NavLink } from 'react-router-dom';

const menuItem =
  'text-md px-3 text-zinc-500 hover:text-zinc-800 aria-[current=page]:text-blue-700 aria-[current=page]:font-semibold';

export default function Navbar() {
  return (
    <ul className='px-3 flex justify-start md:justify-end md:items-center'>
      <li>
        <NavLink to='/' className={menuItem}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/blogs' className={menuItem}>
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={menuItem}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to='/user' className={menuItem}>
          Sign in
        </NavLink>
      </li>
    </ul>
  );
}
