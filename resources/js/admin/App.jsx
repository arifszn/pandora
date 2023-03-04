import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../shared/assets/css/index.css';
import { theme } from '../shared/constants';
import Login from './components/auth/Login';
import NotFound from './components/Notfound';

const router = createBrowserRouter([
  {
    path: '/admin/login',
    element: <Login />,
    errorElement: <NotFound />,
  },
]);

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.colorPrimary,
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
