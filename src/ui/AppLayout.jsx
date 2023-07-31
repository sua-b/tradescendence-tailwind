import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className='w-[100dvw] min-h-screen bg-zinc-300 flex justify-center'>
      <div className='bg-white shadow-2xl md:w-11/12 max-w-screen-lg'>
        <Header />

        <Outlet />

        {/* <Sidebar /> */}
      </div>
    </div>
  );
}

//grid grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-cols-[12rem_1fr] md:grid-rows-[auto_1fr] h-[100dvh] w-[100vw] overflow-y-scroll
