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
    ],
  },
]);

const App = () => {
  return (
    <div className="fade-in">
      <Toaster />
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
  );
};

export default App;
