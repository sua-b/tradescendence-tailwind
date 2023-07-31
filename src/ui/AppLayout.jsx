import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[12rem_1fr] md:grid-rows-[auto_1fr] h-[100dvh] w-[100vw] overflow-y-scroll'>
      <Header />
      <main className='w-full p-8'>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  );
}
