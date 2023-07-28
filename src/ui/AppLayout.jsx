import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[1fr_16rem] md:grid-rows-[auto_1fr] h-screen'>
      <Header />
      <div className='w-fit p-10'>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
}
