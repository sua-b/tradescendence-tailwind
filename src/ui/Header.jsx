import Navbar from './Navbar';
import Logo from './Logo';
import NavMenu from './NavMenu';

const headerBase =
  'bg-gray-100 sticky top-0 h-14 flex justify-center items-center border-b-2 z-50';
const headerMd = 'md:h-16 md:col-span-2 md:grid md:grid-cols-[auto_1fr_auto] ';

export default function Header() {
  return (
    <header className={`${headerBase} ${headerMd}`}>
      <Logo />
      <Navbar />
      <NavMenu />
    </header>
  );
}
