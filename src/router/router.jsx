import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../ui/AppLayout';
import PageNotFound from '../pages/PageNotFound';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Blog from '../features/blogs/Blog';
import About from '../pages/About';
import Manage from '../pages/Manage';
import Login from '../pages/Login';
import BlogCategory from '../pages/BlogCategory';
import ProtectedRoute from '../ProtectedRoute';

const router = createBrowserRouter([
  //public
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
        path: 'blogs/category/:category',
        element: <BlogCategory />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  // private
  {
    path: 'user',
    element: <Login />,
  },
  {
    path: 'user/manage',
    element: (
      <ProtectedRoute>
        <Manage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
