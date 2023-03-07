import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { browserRouter } from './routes/browserRouter';
import 'antd/dist/reset.css';
import '../shared/assets/css/index.css';

const App = () => {
  return (
    <div className="fade-in">
      <Toaster />
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default App;
