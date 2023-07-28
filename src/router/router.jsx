import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Blog from '../pages/Blog';
import About from '../pages/About';

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
    ],
  },
]);

export default router;
