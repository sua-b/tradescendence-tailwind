import { NavLink } from 'react-router-dom';
import {
  LiaHomeSolid,
  LiaBookOpenSolid,
  LiaInfoCircleSolid,
} from 'react-icons/lia';

export default function Navbar() {
  return (
    <nav className='flex justify-end items-center'>
      <ul className='invisible md:visible flex gap-2'>
        <li>
          <NavLink
            to='/'
            className={`flex items-center gap-2 text-xl p-2 rounded-md hover:bg-gray-200 aria-[current=page]:bg-gray-200`}
          >
            <LiaHomeSolid className='inline-block' />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/blogs'
            className='flex items-center gap-2 text-xl p-2 rounded-md hover:bg-gray-200 aria-[current=page]:bg-gray-200'
          >
            <LiaBookOpenSolid className='inline-block' />
            <span>Blogs</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className='flex items-center gap-2 text-xl p-2 rounded-md hover:bg-gray-200 aria-[current=page]:bg-gray-200'
          >
            <LiaInfoCircleSolid className='inline-block' />
            <span>About</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
