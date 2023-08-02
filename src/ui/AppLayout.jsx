import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className=' min-h-screen  flex justify-center'>
      <div className=' shadow-2xl md:w-11/12 max-w-screen-lg'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
