import { ConfigProviderProps } from 'antd/es/config-provider';

export const config = {
  appName: 'Pandora',
  themeColor: '#1DA74D',
  helpLink: 'https://github.com/arifszn/pandora/issues/new',
};

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: config.themeColor,
      fontFamily: 'Roboto',
    },
  },
};
