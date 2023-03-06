import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import App from './App';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from 'antd';
import { antdConfig } from '../shared/constants';
import DefaultLoading from './components/layout/defaultLoading';
import { injectStore } from '../shared/utils/http';

const persistor = persistStore(store);
injectStore(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider {...antdConfig}>
      <Provider store={store}>
        <PersistGate loading={<DefaultLoading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
