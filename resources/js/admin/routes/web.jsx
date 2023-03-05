import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard';

export const webRoutes = {
  login: {
    url: '/admin/login',
    component: <Login />,
    authRequired: false,
  },
  dashboard: {
    url: '/admin/dashboard',
    component: <Dashboard />,
    authRequired: true,
  },
};
