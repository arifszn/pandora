import { ConfigProvider } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../shared/assets/css/index.css';
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
          colorPrimary: '#00b96b',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
