import Navbar from './Navbar';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='bg-white h-20 border-b-8 border-b-zinc-300 grid grid-cols-1 md:grid-cols-[auto_1fr]'>
      <Logo src={'/icon.png'} className='h-10'>
        <span className='text-lg font-bold text-blue-700 m-1'>
          Tradescendence
        </span>
      </Logo>
      <Navbar />
    </header>
  );
}
