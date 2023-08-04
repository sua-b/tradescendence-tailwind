import { BiLogoGithub, BiLogoFacebookCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='h-20 bg-white border-t-8 mt-10 border-t-zinc-300'>
      <div className='flex items-center gap-2 justify-center text-gray-400 pt-4'>
        <small>By: sua-b</small>
        <Link to='https://github.com/sua-b'>
          <BiLogoGithub />
        </Link>
        <Link to='https://www.facebook.com/sua.wb/'>
          <BiLogoFacebookCircle />
        </Link>
      </div>
    </div>
  );
}
