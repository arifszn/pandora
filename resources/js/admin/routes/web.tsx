import { ReactNode } from 'react';
import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard';

type Route = {
  url: string;
  component: ReactNode;
  authRequired: boolean;
};

type Routes = {
  [name: string]: Route;
};

export const webRoutes: Routes = {
  login: {
    url: '/admin/login',
    component: <Login />,
    authRequired: false,
  },
  /* dashboard: {
    url: '/admin/dashboard',
    component: <Dashboard />,
    authRequired: true,
  }, */
};
