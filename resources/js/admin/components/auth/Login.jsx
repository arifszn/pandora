import AuthLayout from './AuthLayout';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { handleErrorResponse, setPageTitle } from '../../../shared/utils';
import axios from 'axios';
import { apiRoutes } from '../../routes/api';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/adminSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setPageTitle('Admin Login');
  }, []);

  const onSubmit = (values) => {
    setLoading(true);

    axios
      .post(apiRoutes.login, {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        // to do login admin
      })
      .catch((error) => {
        handleErrorResponse(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthLayout>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
            />
          </Form.Item>
        </div>
        {/* <div className="flex items-center justify-end">
          <a href="#" className="text-gray-500 dark:text-gray-300 text-xs">
            Forgot password?
          </a>
        </div> */}

        <div className="text-center ">
          <button className="btn btn-block mt-4">Login</button>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default Login;
