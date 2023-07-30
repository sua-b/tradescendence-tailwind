import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[1fr_12rem] md:grid-rows-[auto_1fr] h-[100dvh] w-[100vw] overflow-y-scroll'>
      <Header />
      <main className='w-fit p-8'>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  );
}
