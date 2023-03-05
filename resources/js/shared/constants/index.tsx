import { ConfigProviderProps } from 'antd/es/config-provider';

export const theme = {
  colorPrimary: '#1DA74D',
};

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: theme.colorPrimary,
    },
  },
};
