import Login from '../components/auth/Login';
import Dashboard from '../components/dashboard';
import Users from '../components/users';

type Route = {
  url: string;
  component: JSX.Element;
  authRequired: boolean;
};

const loginRoute: Route = {
  url: '/admin/login',
  component: <Login />,
  authRequired: false,
};

const dashboardRoute: Route = {
  url: '/admin/dashboard',
  component: <Dashboard />,
  authRequired: true,
};

const userRoute: Route = {
  url: '/admin/users',
  component: <Users />,
  authRequired: true,
};

export const webRoutes = {
  login: loginRoute,
  dashboard: dashboardRoute,
  users: userRoute,
};
