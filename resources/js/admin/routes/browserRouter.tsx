import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import ErrorPage from '../components/errorPage';
import Layout from '../components/layout';
import AdminRedirect from '../components/layout/adminRedirect';
import NotFoundPage from '../components/notfoundPage';
import { webRoutes } from './web';
import loadable from '@loadable/component';
import ProgressBar from '../components/loading/progressBar';

const errorElement = <ErrorPage />;
const Login = loadable(() => import('../components/auth/Login'));
const Dashboard = loadable(() => import('../components/dashboard'));
const Users = loadable(() => import('../components/users'));

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
        element: <Login fallback={<ProgressBar />} />,
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
        element: <Dashboard fallback={<ProgressBar />} />,
      },
      {
        path: webRoutes.users,
        element: <Users fallback={<ProgressBar />} />,
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
