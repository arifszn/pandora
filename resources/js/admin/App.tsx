import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import 'antd/dist/reset.css';
import '../shared/assets/css/index.css';
import { webRoutes } from './routes/web';
import { Toaster } from 'sonner';
import Layout from './components/layout';
import RequireAuth from './components/layout/RequireAuth';

const router = createBrowserRouter([
  {
    path: webRoutes.login.url,
    element: webRoutes.login.component,
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: webRoutes.dashboard.url,
        element: <RequireAuth>{webRoutes.dashboard.component}</RequireAuth>,
      },
      {
        path: webRoutes.users.url,
        element: <RequireAuth>{webRoutes.users.component}</RequireAuth>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="fade-in">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
