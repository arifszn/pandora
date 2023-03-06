import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '../../routes/web';
import ProLayout, { ProLayoutProps } from '@ant-design/pro-layout';
import logo from '../../../shared/assets/img/logo.svg';
import { Dropdown } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { config } from '../../../shared/constants';
import { logout } from '../../store/slices/adminSlice';
import { memo, useEffect } from 'react';
import { sidebar } from './sidebar';
import http from '../../../shared/utils/http';
import { apiRoutes } from '../../routes/api';
import { handleErrorResponse } from '../../../shared/utils';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    if (!admin) {
      navigate(webRoutes.login);
    }
  }, [admin]);

  const defaultProps: ProLayoutProps = {
    title: config.appName,
    logo: logo,
    fixedHeader: true,
    fixSiderbar: true,
    layout: 'mix',
    route: {
      routes: sidebar,
    },
  };

  const logoutAdmin = () => {
    http
      .post(apiRoutes.logout)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        handleErrorResponse(error);
      });
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={location}
        onMenuHeaderClick={() => navigate(webRoutes.dashboard)}
        menuItemRender={(item, dom) => (
          <a
            onClick={(e) => {
              e.preventDefault();
              item.path && navigate(item.path);
            }}
            href={item.path}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          src: admin?.avatarUrl,
          icon: <UserOutlined />,
          size: 'small',
          title: admin?.name.split(' ')[0],
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Logout',
                      onClick: () => {
                        logoutAdmin();
                      },
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        actionsRender={() => {
          return [
            <QuestionCircleFilled
              key="QuestionCircleFilled"
              onClick={() => window.open(config.helpLink, '_blank')}
            />,
          ];
        }}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default memo(Layout);
