import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { antdConfig } from '../shared/constants';
import ErrorPage from './components/ErrorPage';
import 'antd/dist/reset.css';
import '../shared/assets/css/index.css';
import { webRoutes } from './routes/web';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: webRoutes.login.url,
    element: webRoutes.login.component,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <ConfigProvider {...antdConfig}>
      <Toaster />
      <div className="fade-in">
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  );
};

export default App;
