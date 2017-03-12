import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app';

const app = (
  <Provider store={ store }>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('content'));
