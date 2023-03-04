import AuthLayout from './AuthLayout';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useState } from 'react';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = (values) => {};

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
              <label className="block text-sm font-medium text-gray-900">
                Email
              </label>
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
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name="password"
            label={
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
            }
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              visibilityToggle={false}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
          </Form.Item>
        </div>
        <div className="flex items-center justify-end">
          <a href="#" className="text-gray-500 dark:text-gray-300 text-xs">
            Forgot password?
          </a>
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-block">Login</button>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default Login;
