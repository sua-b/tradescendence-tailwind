import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AppLayout() {
  return (
    <div className=' min-h-screen  flex justify-center'>
      <div className=' shadow-2xl md:w-11/12 max-w-screen-lg'>
        <Header />

        <Outlet />
      </div>
    </div>
  );
}
