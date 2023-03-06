import { webRoutes } from '../../routes/web';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

export const sidebar = [
  {
    path: webRoutes.dashboard.url,
    key: webRoutes.dashboard.url,
    name: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    path: webRoutes.users.url,
    key: webRoutes.users.url,
    name: 'Users',
    icon: <UserOutlined />,
  },
];
