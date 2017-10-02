import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';
import App from './components/App';

require('../assets/css/main');

const app = (
  <Provider store={store.configure(null)}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
