/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { createStore } from 'redux';
import App from './routes/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
