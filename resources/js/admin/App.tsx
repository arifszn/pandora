import { ConfigProvider } from 'antd';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { antdConfig } from '../shared/constants';
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
    ],
  },
]);

const App = () => {
  return (
    <ConfigProvider {...antdConfig}>
      <Toaster />
      <div className="fade-in">
        <RouterProvider router={router} />
        {/* <Routes>
          <Route
            path={webRoutes.login.url}
            element={webRoutes.login.component}
          />
          <Route element={<Layout />}>
            <Route
              path={webRoutes.dashboard.url}
              element={
                <RequireAuth>{webRoutes.dashboard.component}</RequireAuth>
              }
            />
          </Route>
        </Routes> */}
      </div>
    </ConfigProvider>
  );
};

export default App;
