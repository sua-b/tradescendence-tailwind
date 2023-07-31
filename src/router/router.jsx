import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Blog from '../features/postboard/Blog';
import About from '../pages/About';
import Manage from '../pages/Manage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'blogs/:blogId',
        element: <Blog />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'manage',
        element: <Manage />,
      },
    ],
  },
]);

export default router;
