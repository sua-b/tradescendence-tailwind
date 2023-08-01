import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className=' min-h-screen bg-zinc-300 flex justify-center'>
      <div className='bg-white shadow-2xl md:w-11/12 max-w-screen-lg'>
        <Header />

        <Outlet />
      </div>
    </div>
  );
}
