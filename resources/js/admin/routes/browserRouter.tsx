import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard';
import ErrorPage from '../components/errorPage';
import Layout from '../components/layout';
import AdminRedirect from '../components/layout/adminRedirect';
import NotFoundPage from '../components/notfoundPage';
import Users from '../components/users';
import { webRoutes } from './web';

const errorElement = <ErrorPage />;

export const browserRouter = createBrowserRouter([
  {
    path: webRoutes.admin,
    element: <AdminRedirect />,
    errorElement: errorElement,
  },

  // auth routes
  {
    element: <AuthLayout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.login,
        element: <Login />,
      },
    ],
  },

  // protected routes
  {
    element: <Layout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: webRoutes.users,
        element: <Users />,
      },
    ],
  },

  // 404
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: errorElement,
  },
]);
