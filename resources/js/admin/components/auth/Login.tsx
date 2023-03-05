import AuthLayout from './AuthLayout';
import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { handleErrorResponse, setPageTitle } from '../../../shared/utils';
import axios from 'axios';
import { apiRoutes } from '../../routes/api';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/adminSlice';
import { Admin } from '../../inrterfaces/admin';
import Button from '../../../shared/components/atoms/button';
import { RootState } from '../../store';
import { useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '../../routes/web';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || webRoutes.dashboard.url;
  const admin = useSelector((state: RootState) => state.admin);
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setPageTitle('Admin Login');
  }, []);

  useEffect(() => {
    if (admin) {
      navigate(from, { replace: true });
    }
  }, [admin]);

  const onSubmit = (values: FormValues) => {
    setLoading(true);

    axios
      .post(apiRoutes.login, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        const admin: Admin = {
          id: response.data.admin.id,
          name: response.data.admin.name,
          email: response.data.admin.email,
          avatarUrl: response.data.admin.avatar_url,
          createdAt: response.data.admin.created_at,
          token: response.data.token.access_token,
        };
        dispatch(login(admin));
      })
      .catch((error) => {
        handleErrorResponse(error);
        setLoading(false);
      });
  };

  return (
    <AuthLayout>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-left">
        Admin Login
      </h1>
      <Form
        className="space-y-4 md:space-y-6"
        form={form}
        name="login"
        onFinish={onSubmit}
        layout={'vertical'}
        requiredMark={false}
      >
        <div>
          <Form.Item
            name="email"
            label={
              <p className="block text-sm font-medium text-gray-900">Email</p>
            }
            rules={[
              {
                required: true,
                message: 'Please enter your email',
              },
              {
                type: 'email',
                message: 'Invalid email address',
              },
            ]}
          >
            <Input
              placeholder="name@example.com"
              className="bg-gray-50 text-gray-900 sm:text-sm py-1.5"
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="password"
            label={
              <p className="block text-sm font-medium text-gray-900">
                Password
              </p>
            }
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password
              placeholder="••••••••"
              visibilityToggle={false}
              className="bg-gray-50 text-gray-900 sm:text-sm py-1.5"
            />
          </Form.Item>
        </div>
        {/* <div className="flex items-center justify-end">
          <a href="#" className="text-gray-500 dark:text-gray-300 text-xs">
            Forgot password?
          </a>
        </div> */}

        <div className="text-center ">
          <Button
            className="mt-4 bg-neutral text-primary-content"
            block
            loading={loading}
            size="large"
            htmlType={'submit'}
          >
            Login
          </Button>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default Login;
