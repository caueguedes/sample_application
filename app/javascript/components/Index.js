import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import App from './App';
import { Alert } from "./components";

const Index = () => {
  return (
    <Provider store={store}>
      <Alert />
      <App />
    </Provider>
  )
}

export default Index;