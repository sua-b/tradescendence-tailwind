import { NavLink } from 'react-router-dom';

const menuItem =
  'text-md px-3 text-zinc-500 hover:text-zinc-800 aria-[current=page]:text-blue-700 aria-[current=page]:font-semibold';

const navItem = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About', path: '/about' },
  { name: 'Manage', path: 'user/manage' },
  { name: 'Sign in', path: '/user' },
];

export default function Navbar() {
  return (
    <ul className='px-3 flex justify-start md:justify-end md:items-center'>
      {navItem.map((item) => (
        <li key={item.name}>
          <NavLink to={item.path} className={menuItem}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
