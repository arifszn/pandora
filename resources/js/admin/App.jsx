import { Result } from 'antd';
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
  return <RouterProvider router={router} />;
};

export default App;
