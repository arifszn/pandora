import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/errorPage';
import 'antd/dist/reset.css';
import '../shared/assets/css/index.css';
import { webRoutes } from './routes/web';
import { Toaster } from 'sonner';
import Layout from './components/layout';
import NotFoundPage from './components/notfoundPage';
import RequireAuth from './routes/requireAuth';
import { browserRouter } from './routes/browserRouter';

const App = () => {
  return (
    <div className="fade-in">
      <Toaster />
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default App;
