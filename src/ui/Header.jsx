import Navbar from './Navbar';
import Logo from './Logo';

export default function Header() {
  return (
    <header
      className={`bg-white h-20 border-b-8 border-b-zinc-300 grid grid-cols-1 md:grid-cols-[auto_1fr]`}
    >
      <Logo />
      <Navbar />
    </header>
  );
}
